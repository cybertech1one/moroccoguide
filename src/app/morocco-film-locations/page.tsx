import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Film,
  ArrowRight,
  MapPin,
  Sun,
  Clock,
  Star,
  CheckCircle,
  Shield,
  Globe,
  Eye,
  Lightbulb,
  Mountain,
  Compass,
  Users,
  Info,
  Sparkles,
  Camera,
  BookOpen,
  Landmark,
  Map,
  Ticket,
  Calendar,
  DollarSign,
  Navigation,
  Clapperboard,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Famous Film Locations in Morocco 2026 — Movie & TV Filming Sites',
  description:
    'Explore Morocco film locations where Game of Thrones, Gladiator, Lawrence of Arabia, Inception & John Wick 3 were filmed. Visit Atlas Studios Ouarzazate, Ait Benhaddou, Essaouira & Sahara desert sets with guided film tours.',
  keywords: [
    'morocco film locations',
    'movies filmed morocco',
    'game of thrones morocco',
    'ouarzazate film studios',
    'gladiator filming location morocco',
    'atlas studios ouarzazate',
    'ait benhaddou movies',
    'lawrence of arabia morocco',
    'inception morocco',
    'john wick 3 morocco',
    'mission impossible morocco',
    'the mummy morocco',
    'morocco film tours',
    'hollywood of africa',
    'essaouira game of thrones',
    'morocco movie locations',
    'CLA studios ouarzazate',
    'morocco cinema history',
    'casablanca movie',
    'prison break morocco',
    'film location tours morocco',
    'sex and the city morocco',
    'kingdom of heaven morocco',
    'babel morocco',
  ],
  openGraph: {
    title: 'Famous Film Locations in Morocco 2026 — Movie & TV Filming Sites',
    description:
      'The ultimate guide to Morocco film locations. Visit Atlas Studios, Ait Benhaddou, Essaouira, and the Sahara sets used in Game of Thrones, Gladiator, Inception, and 100+ major productions.',
    url: `${BASE_URL}/morocco-film-locations`,
    images: [
      {
        url: `${BASE_URL}/images/hero-ouarzazate.webp`,
        width: 1200,
        height: 630,
        alt: 'Ait Benhaddou kasbah in Morocco — iconic filming location for Gladiator and Game of Thrones',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Famous Film Locations in Morocco | Movie & TV Filming Sites 2026',
    description:
      'Visit Game of Thrones, Gladiator, Inception & John Wick 3 filming locations across Morocco. Atlas Studios, Ait Benhaddou, Essaouira & more.',
    images: [`${BASE_URL}/images/hero-ouarzazate.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-film-locations` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA — TravelGuide
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-film-locations`,
  name: 'Famous Film Locations in Morocco — Movie & TV Filming Sites',
  description:
    'Comprehensive guide to filming locations across Morocco covering Atlas Studios Ouarzazate, Ait Benhaddou, Essaouira, Fes, Casablanca, the Sahara desert, and Marrakech with visiting tips, tour options, and famous productions filmed at each location.',
  url: `${BASE_URL}/morocco-film-locations`,
  image: `${BASE_URL}/images/hero-ouarzazate.webp`,
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
  datePublished: '2026-03-19',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-film-locations`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Film Locations', item: `${BASE_URL}/morocco-film-locations` },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA — FAQPage (7 questions)
   ═══════════════════════════════════════════════════════════════ */

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What movies were filmed in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Over 100 major films have been shot in Morocco, including Gladiator (2000), Lawrence of Arabia (1962), The Mummy (1999), Inception (2010), John Wick: Chapter 3 (2019), Mission: Impossible - Rogue Nation (2015), Kingdom of Heaven (2005), Sex and the City 2 (2010), Babel (2006), Spectre (2015), and The Jewel of the Nile (1985). Morocco\'s diverse landscapes, skilled local crews, and competitive production costs make it one of the world\'s most popular filming destinations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where was Game of Thrones filmed in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Game of Thrones filmed extensively in Morocco during Seasons 3 and beyond. Ait Benhaddou served as the slave city of Yunkai. Essaouira\'s ramparts and harbour became Astapor, where Daenerys acquires the Unsullied. Atlas Studios in Ouarzazate was used for interior sets and additional scenes. You can visit all of these locations independently or through guided Game of Thrones tours from Marrakech.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where was Gladiator filmed in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ridley Scott filmed key scenes of Gladiator (2000) in and around Ouarzazate, Morocco. Ait Benhaddou served as the backdrop for the slave market and the city of Zucchabar. A massive Roman colosseum replica was constructed at Atlas Studios for the gladiatorial combat sequences. The desert landscapes around Ouarzazate doubled for the Roman province of North Africa. Parts of the original sets remain visible at Atlas Studios today.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you visit Atlas Studios in Ouarzazate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Atlas Studios in Ouarzazate is open to visitors daily. Guided tours last approximately 1-2 hours and cost from 60 MAD per person. You can explore sets from Gladiator, Kingdom of Heaven, and other productions. Some sets are dismantled between productions, so what you see depends on timing. CLA Studios, also in Ouarzazate, offers similar tours. The best time to visit is morning for good light and to avoid afternoon heat. Photography is permitted throughout the tour.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Casablanca the movie actually filmed in Casablanca, Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, the classic 1942 film Casablanca starring Humphrey Bogart was filmed entirely on sound stages at Warner Bros. Studios in Burbank, California. Not a single scene was shot in Morocco. However, Casablanca has embraced its cinematic connection. Rick\'s Cafe, a restaurant inspired by the movie, opened in 2004 in Casablanca\'s old medina and recreates the ambiance of the fictional nightclub. It has become one of the city\'s most popular tourist attractions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I book a film location tour in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Film location tours in Morocco can be booked through local tour operators in Ouarzazate, Marrakech, and Essaouira. Day trips from Marrakech to Ait Benhaddou and Atlas Studios typically cost from 500-800 MAD per person including transport and guide. Multi-day tours covering multiple filming locations across the country start from 2,500 MAD. Book through licensed guides at your hotel, reputable tour agencies, or arrange private transport with a driver-guide. The best tours combine film history with genuine cultural context.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is Morocco so popular for filming movies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco became a filming hub for several reasons: its extraordinary landscape diversity (desert, mountains, coast, ancient cities) can double for dozens of countries. The country offers 300+ days of sunshine per year ensuring reliable shooting conditions. Production costs are significantly lower than Hollywood or European studios. Atlas Studios in Ouarzazate is the largest film studio in the world by area. Morocco also has experienced local crews, supportive government film incentives including a 20% tax rebate, and well-established production infrastructure built over decades of international filmmaking.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: FILMING LOCATIONS BY REGION
   ═══════════════════════════════════════════════════════════════ */

const filmingLocationsByRegion = [
  {
    region: 'Ouarzazate & Atlas Studios',
    icon: Clapperboard,
    tagline: 'The Hollywood of Africa',
    locations: [
      { name: 'Atlas Film Studios', films: 'Gladiator, Kingdom of Heaven, Asterix, The Jewel of the Nile', detail: 'The largest film studio complex in the world by area, covering over 30 hectares. Open for daily tours (from 60 MAD) where you walk through standing sets including a full Egyptian temple, Roman colosseum facades, and reconstructed ancient city walls. Built in 1983, the studios have hosted over 200 productions.' },
      { name: 'CLA Studios', films: 'The Bible, Ben-Hur (2016), Prison Break S5, Homeland', detail: 'The second major studio complex in Ouarzazate, founded by Dino De Laurentiis. Features sets from biblical epics and modern action series. Some tours available, but check access as active filming may restrict entry. CLA specializes in large-scale historical reconstructions.' },
      { name: 'Tifoultoute Kasbah', films: 'Lawrence of Arabia, Sodom and Gomorrah', detail: 'A restored kasbah just 8 km outside Ouarzazate used in early Hollywood productions of the 1960s. The rooftop terrace offers panoramic views of the surrounding desert and palmeries. David Lean used this as a base during the Lawrence of Arabia shoot.' },
    ],
  },
  {
    region: 'Ait Benhaddou',
    icon: Landmark,
    tagline: 'UNESCO World Heritage Film Star',
    locations: [
      { name: 'Ksar Ait Benhaddou', films: 'Gladiator, Game of Thrones (Yunkai), The Mummy, Kingdom of Heaven, Alexander', detail: 'This UNESCO-listed fortified village has appeared in over 20 major films. The mud-brick towers against the Atlas Mountains create a timeless setting that doubles for ancient Rome, Egypt, Jerusalem, and fantasy cities. Cross the river for the iconic reflection shot. Free entry; hire a local guide from 100 MAD.' },
      { name: 'The hilltop granary', films: 'Game of Thrones — Yunkai siege scenes (Season 3)', detail: 'The summit of Ait Benhaddou offers 360-degree views used extensively in Game of Thrones. The hillside approach was filmed as Daenerys marches on Yunkai. The climb takes 20 minutes and rewards with panoramic Atlas Mountain views on clear days.' },
      { name: 'Riverbed & approach road', films: 'Gladiator slave market scenes, Alexander (2004), Jesus of Nazareth', detail: 'The shallow river at the base of the ksar creates the classic cinematic approach shot. During dry months you can walk across; in spring, stepping stones bridge the flow. Best photographed during golden hour when the mud-brick walls glow amber.' },
    ],
  },
  {
    region: 'Essaouira',
    icon: Compass,
    tagline: 'Game of Thrones — Astapor',
    locations: [
      { name: 'Ramparts & Skala du Port', films: 'Game of Thrones (Astapor), Othello (1951), Alexander', detail: 'The 18th-century Portuguese fortifications with bronze cannons became Astapor in Game of Thrones, where Daenerys famously commands the Unsullied. The atmospheric ramparts overlooking the Atlantic are free to explore and instantly recognizable to fans of the show.' },
      { name: 'Harbour & medina walls', films: 'Game of Thrones plaza scenes, Kingdom of Heaven', detail: 'Essaouira&apos;s compact harbour with blue fishing boats served as Astapor&apos;s waterfront. The arched gateway and city walls provided the backdrop for Daenerys trading her dragon for the Unsullied army. A guided walking tour connects all Game of Thrones spots in about 90 minutes.' },
      { name: 'Orson Welles Square', films: 'Othello (1951) directed by Orson Welles', detail: 'Named after the legendary filmmaker who shot much of his Othello adaptation here between 1949 and 1952. A bronze statue of Welles stands in the square. His use of Essaouira&apos;s architecture was groundbreaking and predated Morocco&apos;s rise as a filming destination by decades.' },
    ],
  },
  {
    region: 'Fes Medina',
    icon: Eye,
    tagline: 'The Ancient Labyrinth on Screen',
    locations: [
      { name: 'Fes el-Bali medina streets', films: 'The Bourne Ultimatum, Inception (inspiration), Spectre (chase inspiration)', detail: 'The world&apos;s largest car-free urban area provides an atmospheric maze of 9,000+ narrow alleys, covered souks, and ancient buildings. Directors use Fes to represent historical cities across the Islamic world and beyond. The organic, disorienting layout inspired Inception&apos;s folding cityscapes.' },
      { name: 'Chouara Tannery', films: 'Documentaries, travel shows, music videos', detail: 'The medieval tannery with its colorful dye vats has appeared in countless films and documentaries since the 1960s. View from the surrounding leather shop terraces (free with purchase) for the overhead perspective that makes this one of Morocco&apos;s most photographed locations.' },
      { name: 'Bou Inania Madrasa', films: 'Period dramas, historical documentaries', detail: 'The 14th-century Marinid theological school with carved stucco, zellige tilework, and cedar woodwork provides an authentic medieval Islamic setting. The courtyard&apos;s symmetry and detail have featured in productions requiring historical accuracy. Entry from 20 MAD.' },
    ],
  },
  {
    region: 'Sahara Desert',
    icon: Sun,
    tagline: 'Endless Desert Epics',
    locations: [
      { name: 'Erg Chebbi (Merzouga)', films: 'The Mummy, Sahara (2005), Prince of Persia, Spectre desert scenes', detail: 'The towering orange dunes near Merzouga reach 150 meters and have doubled for deserts across the Middle East and North Africa. Brendan Fraser&apos;s The Mummy used Erg Chebbi extensively for its Egyptian desert sequences. Accessible via camel trek or 4x4 from Merzouga town.' },
      { name: 'Zagora & Draa Valley', films: 'Lawrence of Arabia, Babel, The Hills Have Eyes', detail: 'The vast, flat desert plains and dramatic gorges south of Ouarzazate provided the sweeping landscape shots for Lawrence of Arabia. Babel filmed its Morocco segments in remote Berber villages here. The region remains largely unchanged since the 1960s shoots.' },
      { name: 'Todra & Dades Gorges', films: 'Adventure films, automotive commercials, travel documentaries', detail: 'The 300-meter canyon walls of Todra Gorge and the winding road through Dades Gorge have featured in adventure films and high-end automotive commercials. The narrow gorge creates dramatic natural framing that cinematographers seek out.' },
    ],
  },
  {
    region: 'Marrakech',
    icon: Star,
    tagline: 'The Red City on Film',
    locations: [
      { name: 'Jemaa el-Fna & medina souks', films: 'John Wick: Chapter 3, Mission: Impossible - Rogue Nation, Inception', detail: 'The chaotic energy of Jemaa el-Fna and the narrow medina alleys feature prominently in John Wick 3, where Keanu Reeves fights through the souks. Tom Cruise&apos;s motorcycle chase in Mission: Impossible also used Marrakech streets. The square&apos;s snake charmers and food stalls create instant atmosphere.' },
      { name: 'Luxury riads & hotels', films: 'Sex and the City 2, Spectre (interior inspiration)', detail: 'Sex and the City 2 filmed extensively in Marrakech, showcasing the city&apos;s luxury riad culture and palace hotels. The production used La Mamounia and other historic properties as filming locations. Marrakech&apos;s blend of traditional architecture and modern luxury draws fashion and film productions alike.' },
      { name: 'Bahia Palace & Ben Youssef Madrasa', films: 'Period dramas, music videos, fashion campaigns', detail: 'The ornate courtyards of Bahia Palace (entry from 70 MAD) and the geometric perfection of Ben Youssef Madrasa (entry from 20 MAD) provide ready-made film sets of extraordinary beauty. Both locations book out for commercial and editorial shoots regularly.' },
    ],
  },
  {
    region: 'Casablanca',
    icon: Globe,
    tagline: 'Cinema History & Rick&apos;s Cafe',
    locations: [
      { name: 'Rick&apos;s Cafe', films: 'Inspired by Casablanca (1942) — though the film was shot in Hollywood', detail: 'This restaurant recreates the atmosphere of the fictional Rick&apos;s Cafe Americain from the 1942 classic. Despite the film never being shot in Morocco, this lovingly designed tribute opened in 2004 and has become Casablanca&apos;s most famous tourist attraction. Dinner reservations strongly recommended. Main courses from 150 MAD.' },
      { name: 'Hassan II Mosque', films: 'Documentaries, aerial establishing shots, travel series', detail: 'Africa&apos;s largest mosque, sitting dramatically on the Atlantic coastline, appears in numerous documentaries and as an establishing shot for films set in Morocco. The minaret stands 210 meters tall. Guided interior tours are available for non-Muslims from 130 MAD.' },
      { name: 'Art Deco Quartier Habous', films: 'Period dramas set in colonial North Africa', detail: 'The French-built Art Deco districts and the planned new medina (Quartier Habous) provide a unique 1930s-era backdrop. Productions depicting colonial-era North Africa use these streets to capture an era that has largely disappeared elsewhere in the region.' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MOROCCO FILM HISTORY TIMELINE
   ═══════════════════════════════════════════════════════════════ */

const filmTimeline = [
  { decade: '1950s', milestone: 'Orson Welles films Othello in Essaouira and Safi between 1949 and 1952, launching Morocco as an international filming destination. The stark coastal architecture and labyrinthine medina streets prove ideal for Shakespeare on screen.' },
  { decade: '1960s', milestone: 'David Lean&apos;s Lawrence of Arabia transforms Ouarzazate into a household name among filmmakers. The epic&apos;s success draws major studios to southern Morocco, establishing the region&apos;s reputation for desert epics and historical dramas.' },
  { decade: '1970-80s', milestone: 'Atlas Studios opens in Ouarzazate (1983), providing purpose-built production facilities. Morocco attracts a steady stream of international productions including The Jewel of the Nile and The Living Daylights, building a skilled local crew base that proves essential for decades to come.' },
  { decade: '1990s', milestone: 'The Mummy and Kundun bring blockbuster-scale production to Morocco. Atlas Studios expands significantly. Martin Scorsese and Stephen Sommers discover the country&apos;s versatility and cost advantages, paving the way for the 2000s boom.' },
  { decade: '2000s', milestone: 'Ridley Scott films Gladiator and Kingdom of Heaven, cementing Ouarzazate as the &ldquo;Hollywood of Africa.&rdquo; The Moroccan government introduces formal film production incentives including tax rebates and streamlined permitting through the Centre Cinematographique Marocain.' },
  { decade: '2010s', milestone: 'Game of Thrones (Seasons 3+), Inception, John Wick 3, and Mission: Impossible bring Morocco to massive global audiences. The government introduces a 20% tax rebate on production spending. Streaming platforms begin producing original content in Morocco.' },
  { decade: '2020s', milestone: 'Netflix, Amazon, and Apple TV+ all produce content in Morocco. New studio facilities expand capacity beyond Ouarzazate. Film tourism becomes a significant contributor to the economy, with an estimated 15% of visitors citing film locations as a travel motivation.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAMOUS PRODUCTIONS FILMED IN MOROCCO
   ═══════════════════════════════════════════════════════════════ */

const famousProductions = [
  { title: 'Lawrence of Arabia (1962)', director: 'David Lean', locations: 'Ouarzazate, Ait Benhaddou, Zagora, Tifoultoute', note: 'The film that established Morocco as a filming destination. Peter O&apos;Toole&apos;s Oscar-winning epic was largely shot across southern Morocco. The Draa Valley&apos;s vast desert plains provided the sweeping panoramas that define this masterpiece.' },
  { title: 'Gladiator (2000)', director: 'Ridley Scott', locations: 'Atlas Studios, Ait Benhaddou, Ouarzazate desert', note: 'Russell Crowe&apos;s Oscar-winning epic built a full colosseum replica at Atlas Studios. The slave market and Zucchabar scenes used Ait Benhaddou. Remnants of the sets remain visible on studio tours.' },
  { title: 'Game of Thrones (2013-2019)', director: 'Various', locations: 'Ait Benhaddou (Yunkai), Essaouira (Astapor), Atlas Studios', note: 'Seasons 3 through 6 filmed extensively in Morocco. Daenerys&apos;s conquest of the slave cities brought Ait Benhaddou and Essaouira to millions of viewers worldwide.' },
  { title: 'The Mummy (1999)', director: 'Stephen Sommers', locations: 'Erfoud, Erg Chebbi, Atlas Studios', note: 'Brendan Fraser&apos;s adventure classic used the Sahara desert near Erfoud and Merzouga for its Egyptian desert sequences. Sand dune scenes at Erg Chebbi remain some of the most recognizable shots in the film.' },
  { title: 'Inception (2010)', director: 'Christopher Nolan', locations: 'Tangier medina streets', note: 'The narrow alleys of Tangier&apos;s medina provided the labyrinthine setting for dream-world sequences. Nolan cited the disorienting layout of Moroccan medinas as a direct influence on the film&apos;s folding architecture.' },
  { title: 'John Wick: Chapter 3 (2019)', director: 'Chad Stahelski', locations: 'Marrakech medina, Essaouira, Sahara desert', note: 'Keanu Reeves&apos;s fight sequences through the Marrakech souks and desert confrontation scenes brought Morocco&apos;s action-film potential to a new generation of viewers.' },
  { title: 'Mission: Impossible - Rogue Nation (2015)', director: 'Christopher McQuarrie', locations: 'Marrakech, Rabat', note: 'Tom Cruise&apos;s motorcycle chase through Marrakech and key diplomatic scenes in Rabat showcased Morocco&apos;s capacity for modern action sequences alongside historical architecture.' },
  { title: 'Kingdom of Heaven (2005)', director: 'Ridley Scott', locations: 'Atlas Studios, Essaouira, Ouarzazate', note: 'Scott returned to Morocco for this Crusades epic, building massive Jerusalem siege walls at Atlas Studios and using Essaouira&apos;s 18th-century fortifications for coastal city scenes.' },
  { title: 'Sex and the City 2 (2010)', director: 'Michael Patrick King', locations: 'Marrakech riads, luxury hotels, medina', note: 'The sequel brought Carrie and friends to Marrakech, filming at La Mamounia and across the city&apos;s luxury properties. The production boosted Marrakech&apos;s profile as a glamorous travel destination.' },
  { title: 'Babel (2006)', director: 'Alejandro Gonzalez Inarritu', locations: 'Taguenzalt, Ouarzazate region, remote Berber villages', note: 'Brad Pitt and Cate Blanchett&apos;s Oscar-nominated drama filmed its Morocco segments in remote Berber communities south of Ouarzazate, capturing rural Moroccan life with striking authenticity.' },
  { title: 'Spectre (2015)', director: 'Sam Mendes', locations: 'Tangier, Oujda, Erfoud', note: 'Daniel Craig&apos;s Bond installment featured a dramatic desert train sequence filmed in eastern Morocco and atmospheric pursuit scenes through Tangier&apos;s narrow streets.' },
  { title: 'Prison Break Season 5 (2017)', director: 'Various', locations: 'CLA Studios Ouarzazate, Ouarzazate streets', note: 'The revival season filmed extensively at CLA Studios, recreating a fictional Yemeni prison. Ouarzazate&apos;s streets doubled for Middle Eastern urban settings throughout the season.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHY FILMMAKERS CHOOSE MOROCCO
   ═══════════════════════════════════════════════════════════════ */

const whyMorocco = [
  { reason: 'Landscape diversity', detail: 'Sahara dunes, Atlas Mountains, Atlantic coast, ancient medinas, gorges, and palm oases all within a few hours of each other. Morocco doubles for Egypt, Jordan, Tibet, ancient Rome, biblical lands, and fantasy worlds.' },
  { reason: '300+ days of sunshine', detail: 'Reliable weather means fewer weather-related delays and consistent natural lighting. Southern Morocco in particular offers near-guaranteed clear skies most of the year, cutting production costs.' },
  { reason: 'Lower production costs', detail: 'Crew, transport, accommodation, and set construction costs are 40-60% lower than Hollywood, Europe, or the Middle East. This makes large-scale productions with massive sets financially viable.' },
  { reason: 'World-class studios', detail: 'Atlas Studios (30+ hectares) and CLA Studios in Ouarzazate offer massive backlots, sound stages, and standing sets. Atlas is the largest studio complex in the world by area, with decades of infrastructure built up.' },
  { reason: 'Experienced local crews', detail: 'Since the 1960s, international productions have created a deep pool of skilled Moroccan crew members &mdash; from set builders and extras to production coordinators, stunt performers, and location managers.' },
  { reason: '20% government tax rebate', detail: 'Morocco offers a 20% tax rebate on qualifying local production spending through the Centre Cinematographique Marocain, plus streamlined filming permits and a dedicated film commission for location scouting.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: VISITING TIPS
   ═══════════════════════════════════════════════════════════════ */

const visitingTips = [
  { tip: 'Hire a local guide at Ait Benhaddou', detail: 'Licensed guides (from 100 MAD) know exactly where each film was shot and can point out camera angles and set positions. They bring the locations to life with behind-the-scenes production stories.' },
  { tip: 'Visit Atlas Studios in the morning', detail: 'Morning light is best for photography, and you avoid the afternoon heat that can exceed 40 degrees C. Tours last 1-2 hours. Some sets may be closed during active productions, so arrive early.' },
  { tip: 'Combine Ait Benhaddou with Ouarzazate', detail: 'The two sites are only 30 km apart. A full day allows you to tour Atlas Studios in the morning and Ait Benhaddou in the afternoon golden hour &mdash; the best light for matching the on-screen look of these locations.' },
  { tip: 'Book day trips from Marrakech', detail: 'Marrakech to Ouarzazate is a scenic 4-hour drive over the Tizi n&apos;Tichka pass (2,260 m elevation). Day trips from Marrakech to Ait Benhaddou and Atlas Studios start from 500 MAD per person including transport.' },
  { tip: 'Bring water and sun protection', detail: 'Ouarzazate and the desert regions are extremely hot from May through September. Temperatures regularly exceed 45 degrees C. Carry at least 2 liters of water per person and wear sun protection.' },
  { tip: 'Check for active filming before visiting', detail: 'Atlas Studios and CLA Studios occasionally close sections during active productions. Check with your hotel or tour operator before visiting to avoid finding areas restricted.' },
  { tip: 'Allow extra time in Essaouira', detail: 'Beyond the Game of Thrones locations, Essaouira is a beautiful coastal town worth 1-2 days. The seafood, art galleries, and Atlantic breeze make it a perfect addition to any film-location itinerary.' },
  { tip: 'Download offline maps for remote sites', detail: 'Many desert filming locations have limited cell signal. Download Google Maps or Maps.me offline data for the Ouarzazate, Zagora, and Merzouga regions before leaving Wi-Fi coverage.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GUIDED FILM TOURS
   ═══════════════════════════════════════════════════════════════ */

const guidedTours = [
  { tour: 'Ouarzazate Film Studio Day Tour', duration: '4-5 hours', price: 'From 300 MAD', description: 'Visit Atlas Studios and CLA Studios with a knowledgeable guide who explains the history of each set and the productions filmed there. Walk through standing Egyptian, Roman, and medieval sets.' },
  { tour: 'Ait Benhaddou & Studios Combo', duration: 'Full day', price: 'From 500 MAD', description: 'Morning at Atlas Studios followed by afternoon at Ait Benhaddou. Guides cover both film history and the UNESCO heritage of the ksar. Includes transport between sites.' },
  { tour: 'Marrakech to Ouarzazate Day Trip', duration: '12-14 hours', price: 'From 800 MAD', description: 'Scenic drive over the High Atlas via Tizi n&apos;Tichka pass (2,260 m). Atlas Studios tour, Ait Benhaddou visit, and return to Marrakech by evening. Lunch stop included.' },
  { tour: 'Game of Thrones Morocco Tour', duration: '3-4 days', price: 'From 3,500 MAD', description: 'Multi-day tour covering Essaouira (Astapor), Ait Benhaddou (Yunkai), Atlas Studios interior sets, and desert locations. Overnight stays in Ouarzazate and Essaouira. Seasonal pricing may vary.' },
  { tour: 'Desert Film Locations Expedition', duration: '2-3 days', price: 'From 2,500 MAD', description: 'Visit The Mummy and Lawrence of Arabia desert locations near Erfoud, Merzouga, and Zagora. Includes overnight in a Sahara desert camp under the stars. Seasonal pricing may vary.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/ouarzazate',
    title: 'Ouarzazate City Guide',
    description: 'Full travel guide to Ouarzazate, the gateway to Atlas Studios and the Sahara desert.',
    icon: Map,
  },
  {
    href: '/morocco-instagram-spots',
    title: 'Morocco Instagram Spots',
    description: 'The most photogenic locations across Morocco with timing tips and photography advice.',
    icon: Camera,
  },
  {
    href: '/morocco-history-guide',
    title: 'Morocco History Guide',
    description: 'Explore the rich history behind Morocco&apos;s kasbahs, medinas, and ancient trade routes.',
    icon: BookOpen,
  },
  {
    href: '/attractions',
    title: 'Top Attractions in Morocco',
    description: 'The must-visit landmarks, natural wonders, and cultural experiences across Morocco.',
    icon: Star,
  },
  {
    href: '/morocco-budget-travel',
    title: 'Morocco Budget Travel',
    description: 'How to visit Morocco&apos;s film locations and more on a tight budget. Transport, food, and lodging tips.',
    icon: DollarSign,
  },
  {
    href: '/essaouira',
    title: 'Essaouira City Guide',
    description: 'The coastal city where Game of Thrones filmed Astapor. Seafood, art, and Atlantic breezes.',
    icon: Compass,
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoFilmLocationsPage() {
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
            backgroundImage: 'url(/images/hero-ouarzazate.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Film Locations</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Film className="w-4 h-4" />
            Film Location Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Famous Film Locations
            <br className="hidden md:block" /> in Morocco
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-6">
            Morocco has hosted over 100 major film and television productions since the 1950s.
            Walk through the sets of Gladiator, stand where Daenerys freed the Unsullied, and
            explore the largest film studio in the world at Ouarzazate.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> 20+ Film Locations</span>
            <span className="flex items-center gap-1.5"><Film className="w-3.5 h-3.5" /> 100+ Productions</span>
            <span className="flex items-center gap-1.5"><Ticket className="w-3.5 h-3.5" /> From 60 MAD</span>
            <span className="flex items-center gap-1.5"><Camera className="w-3.5 h-3.5" /> Photo Tips</span>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco: The Hollywood of Africa
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco earned its nickname as the &ldquo;Hollywood of Africa&rdquo; through six decades of
                continuous international film production. Over 300 days of sunshine per year, landscapes
                that range from Sahara dunes to snow-capped Atlas peaks, and production costs a fraction
                of Hollywood or European studios &mdash; these advantages drew filmmakers here starting
                with Orson Welles in 1949 and have kept them coming back ever since.
              </p>
              <p>
                Ouarzazate sits at the center of this industry. Atlas Film Studios, the largest film
                studio complex in the world by area, has hosted productions from Gladiator to Game of
                Thrones. Thirty kilometers away, the UNESCO-listed Ait Benhaddou has appeared in more
                than 20 major films, its mud-brick towers standing in for ancient Rome, biblical
                Jerusalem, and the fictional slave city of Yunkai. On the Atlantic coast, Essaouira&apos;s
                18th-century ramparts became Astapor, where Daenerys acquired her Unsullied army.
              </p>
              <p>
                Beyond the obvious blockbusters, Morocco has hosted Christopher Nolan&apos;s Inception
                in Tangier, the Sex and the City 2 production in Marrakech&apos;s luxury riads, Keanu
                Reeves fighting through the souks in John Wick 3, and Tom Cruise racing through the Red
                City in Mission: Impossible. The country&apos;s film infrastructure grows each year, with
                Netflix, Amazon, and Apple TV+ all producing original content here.
              </p>
              <p>
                This guide covers every major filming location in Morocco, the productions shot at each
                site, and practical information for planning your own film-location tour &mdash; from
                studio entry fees and guide costs to the best time of day for recreating iconic shots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Film History Timeline ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco&apos;s Film History Timeline
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Seven decades of cinematic history, from Orson Welles in the 1950s to
            streaming-era productions in the 2020s.
          </p>

          <div className="space-y-4">
            {filmTimeline.map((era, i) => (
              <div key={i} className="card-moroccan p-5">
                <div className="flex items-start gap-4">
                  <div className="w-16 shrink-0 text-center">
                    <span className="text-lg font-bold text-[var(--color-accent)] font-[family-name:var(--font-display)]">{era.decade}</span>
                  </div>
                  <div className="flex-1 border-l-2 border-[var(--color-accent)]/20 pl-4">
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{era.milestone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Filmmakers Choose Morocco ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Why Filmmakers Choose Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Six key factors that have made Morocco one of the world&apos;s most sought-after
            filming destinations for over sixty years.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyMorocco.map((item, i) => (
              <div key={i} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{item.reason}</p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filming Locations by Region ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Filming Locations by Region
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s film locations span the country, from the Atlantic coast to the Sahara.
            Each region offers distinct landscapes that have doubled for dozens of countries on screen.
          </p>

          <div className="space-y-8">
            {filmingLocationsByRegion.map((region) => {
              const RegionIcon = region.icon;
              return (
                <div key={region.region} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <RegionIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {region.region}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)]">{region.tagline}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                    {region.locations.map((loc, i) => (
                      <div key={i} className="p-4 bg-[var(--surface-muted)] rounded-lg">
                        <div className="flex items-start gap-3">
                          <div className="w-7 h-7 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-[var(--color-accent)]">{i + 1}</span>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[var(--text-primary)]">{loc.name}</p>
                            <p className="text-xs text-[var(--color-accent)] mt-1 flex items-center gap-1">
                              <Film className="w-3 h-3" /> {loc.films}
                            </p>
                            <p className="text-xs text-[var(--text-muted)] mt-1">{loc.detail}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Famous Productions Table ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Film className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Famous Movies &amp; TV Shows Filmed in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From 1960s epics to modern blockbusters and streaming series, these are the most
            notable productions that chose Morocco as their filming destination.
          </p>

          <div className="space-y-4">
            {famousProductions.map((prod, i) => (
              <div key={i} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Star className="w-4 h-4 text-[var(--color-gold)]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-semibold text-[var(--text-primary)] font-[family-name:var(--font-heading)]">{prod.title}</p>
                    <p className="text-xs text-[var(--color-accent)] mt-1">Director: {prod.director} | Locations: {prod.locations}</p>
                    <p className="text-sm text-[var(--text-muted)] mt-1">{prod.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Morocco&apos;s Film Industry Continues to Grow
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Beyond the productions listed above, Morocco has hosted dozens of additional films
                  including The Bourne Ultimatum, Prince of Persia, Sahara, The Hills Have Eyes,
                  Asterix &amp; Obelix: Mission Cleopatra, and the James Bond films The Living Daylights
                  and Spectre. Streaming giants Netflix, Amazon, and Apple TV+ continue to produce
                  original content here, ensuring a steady stream of new filming locations for visitors
                  to discover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Visiting Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CheckCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tips for Visiting Morocco Film Locations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice to get the most out of your film-location tour,
            from timing and transport to what to bring.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {visitingTips.map((item, i) => (
              <div key={i} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-[var(--color-gold)]">{i + 1}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{item.tip}</p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guided Film Tours ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Navigation className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Guided Film Location Tours
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Organized tours take the logistics out of visiting remote film locations. These popular
            options cover the major sites with knowledgeable guides. Seasonal pricing may vary.
          </p>

          <div className="space-y-4">
            {guidedTours.map((tour, i) => (
              <div key={i} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <Ticket className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-semibold text-[var(--text-primary)] font-[family-name:var(--font-heading)]">{tour.tour}</p>
                    <div className="flex flex-wrap gap-3 mt-1.5 text-xs">
                      <span className="flex items-center gap-1 text-[var(--color-accent)]">
                        <Clock className="w-3 h-3" /> {tour.duration}
                      </span>
                      <span className="flex items-center gap-1 text-[var(--color-gold)]">
                        <DollarSign className="w-3 h-3" /> {tour.price}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-muted)] mt-1.5">{tour.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 card-moroccan p-5 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <p className="text-sm text-[var(--text-secondary)]">
                <span className="font-semibold text-[var(--text-primary)]">Booking tip:</span> Prices
                listed are approximate and may vary by season. Private tours cost more but offer
                flexibility with timing and itinerary. Group tours are more affordable and typically
                depart early morning. Book through your hotel or a licensed tour agency in Marrakech or
                Ouarzazate for the most reliable service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photography at Film Locations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Photography Tips at Film Locations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Recreate iconic shots and capture Morocco&apos;s cinematic landscapes with
            these location-specific photography tips.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <Sun className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Golden hour at Ait Benhaddou</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">The late afternoon sun bathes the mud-brick ksar in warm amber light, perfectly recreating the cinematic look from Gladiator and Game of Thrones. Cross the river for the reflection shot that appears on every poster.</p>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <Eye className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Recreate iconic camera angles</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">Knowledgeable local guides can position you at the exact camera angles used in famous films. Ask for the &ldquo;Gladiator view&rdquo; or the &ldquo;Game of Thrones shot&rdquo; at each location &mdash; they know the precise spots.</p>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <Mountain className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Desert sunrise photography</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">For Sahara film locations like The Mummy&apos;s Erg Chebbi, wake before dawn. The transition from blue to gold across the dunes creates the epic desert panoramas that defined these films. Bring a telephoto lens for dune detail shots.</p>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Studio photography rules</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">Photography is permitted at Atlas Studios during tours. Certain areas may be restricted during active productions. Professional video and drone equipment may require additional permissions. Ask your guide before flying a drone.</p>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Avoid peak tour groups</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">Large tour buses arrive at Ait Benhaddou between 10 AM and 2 PM. Visit early morning or late afternoon for crowd-free photography and significantly better light conditions.</p>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <Compass className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Essaouira rampart angles</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">The Game of Thrones Astapor scenes were filmed along the Skala du Port. Walk the full length of the ramparts for the best angles matching the show, with the Portuguese cannons and Atlantic Ocean as your backdrop.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Casablanca Movie: Myth vs. Reality ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Casablanca Movie: Myth vs. Reality
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The most famous &ldquo;Moroccan&rdquo; film was never actually filmed in Morocco.
            Here is the real story &mdash; and what to see in Casablanca today.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                The 1942 classic <em>Casablanca</em>, starring Humphrey Bogart and Ingrid Bergman, is one
                of the most celebrated films in cinema history. Set during World War II in the Moroccan city,
                it tells the story of Rick Blaine&apos;s nightclub and the wartime intrigue surrounding it.
                Despite its title and setting, not a single frame was shot in Morocco &mdash; the entire
                production took place on Warner Bros. sound stages in Burbank, California.
              </p>
              <p>
                However, Casablanca has fully embraced its cinematic legacy. In 2004, American expatriate
                Kathy Kriger opened <strong>Rick&apos;s Cafe</strong> in the old medina of Casablanca,
                recreating the ambiance of the fictional nightclub with Art Deco furnishings, a curved bar,
                and a pianist playing &ldquo;As Time Goes By.&rdquo; The restaurant has become one of the
                city&apos;s most visited tourist attractions. Reservations are strongly recommended,
                especially for dinner. Main courses range from 150-300 MAD.
              </p>
              <p>
                The real Casablanca offers its own cinematic experiences beyond Rick&apos;s Cafe: the
                breathtaking Hassan II Mosque perched above the Atlantic (interior tours from 130 MAD for
                non-Muslims), the Art Deco architecture of the Ville Nouvelle dating to the 1930s French
                protectorate era, and the Quartier Habous planned medina built during the colonial period
                with traditional Moroccan architectural style.
              </p>
            </div>
          </div>

          <div className="mt-6 card-moroccan p-5">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Visiting Rick&apos;s Cafe
                </h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Located at 248 Boulevard Sour Jdid in the old medina, Rick&apos;s Cafe serves Moroccan
                  and international cuisine. Dinner reservations are essential, especially during peak tourist
                  season (October through April). The decor faithfully recreates the film&apos;s atmosphere,
                  and live piano music plays nightly. A visit pairs naturally with exploring Casablanca&apos;s
                  Art Deco heritage and the nearby Hassan II Mosque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Everything you need to know about visiting Morocco&apos;s film locations,
            from specific productions to practical tour details.
          </p>

          <div className="space-y-5">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <div key={i} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {faq.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Reference ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Quick Reference: Film Location Essentials
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key facts to remember when planning your Morocco film-location trip.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-moroccan p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                <Clapperboard className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <p className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                Atlas Studios
              </p>
              <p className="text-sm text-[var(--text-secondary)]">World&apos;s largest film studio by area. Open daily, tours from 60 MAD, 1-2 hours</p>
            </div>
            <div className="card-moroccan p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                <Landmark className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <p className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                Ait Benhaddou
              </p>
              <p className="text-sm text-[var(--text-secondary)]">UNESCO World Heritage site, 20+ films, free entry, guide from 100 MAD</p>
            </div>
            <div className="card-moroccan p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <p className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                Best Season
              </p>
              <p className="text-sm text-[var(--text-secondary)]">Spring (Mar-May) and autumn (Sep-Nov) for comfortable temperatures and clear skies</p>
            </div>
            <div className="card-moroccan p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                <Navigation className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <p className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                Day Trips
              </p>
              <p className="text-sm text-[var(--text-secondary)]">Marrakech to Ouarzazate day trips from 500-800 MAD per person with guide</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Related Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue planning your Morocco trip with these related guides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <GuideIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] mt-1">{guide.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--color-accent)] transition-colors mt-1 shrink-0" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-3xl text-center">
          <div className="card-moroccan p-8 md:p-12">
            <Film className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Walk Through Hollywood&apos;s Favorite Backlot
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-xl mx-auto">
              From ancient kasbahs to vast desert dunes, Morocco&apos;s film locations offer a
              journey through six decades of cinema history. Atlas Studios, Ait Benhaddou, and
              Essaouira are all waiting for you to step onto the set.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ouarzazate"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <MapPin className="w-4 h-4" />
                Explore Ouarzazate
              </Link>
              <Link
                href="/essaouira"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-semibold hover:bg-[var(--color-accent)] hover:text-white transition-colors"
              >
                <Compass className="w-4 h-4" />
                Essaouira Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

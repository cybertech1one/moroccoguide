import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Film,
  Camera,
  MapPin,
  Clock,
  Star,
  Ticket,
  Clapperboard,
  Building2,
  Globe,
  Award,
  Route,
  Eye,
  CheckCircle,
  DollarSign,
  Info,
  Play,
  Tv,
  Calendar,
  Users,
  Map,
  Compass,
  ArrowRight,
  Shield,
  Sparkles,
  Phone,
  Mail,
  Landmark,
  Sunrise,
  Mountain,
  TreePalm,
  Drama,
  Video,
  Megaphone,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Morocco Filming Locations | Game of Thrones, Gladiator, James Bond & Hollywood',
  description:
    'Discover Morocco\'s famous filming locations. Visit Game of Thrones Yunkai, Gladiator\'s arena, James Bond Spectre streets, Atlas Studios Ouarzazate, and 20+ iconic spots from Hollywood\'s favorite African destination.',
  keywords: [
    'morocco filming locations',
    'game of thrones morocco',
    'gladiator filming location',
    'atlas studios ouarzazate',
    'morocco hollywood',
    'ait benhaddou movies',
    'james bond morocco',
    'bourne ultimatum tangier',
    'morocco film tourism',
    'essaouira game of thrones',
    'kingdom of heaven morocco',
    'lawrence of arabia morocco',
    'the mummy morocco',
    'john wick morocco',
    'mission impossible morocco',
    'inception morocco',
    'prison break morocco',
    'homeland morocco',
    'jack ryan morocco',
    'black hawk down morocco',
    'cla studios ouarzazate',
    'netflix morocco productions',
    'atlas studios visitor guide',
    'morocco film tours',
    'behind the scenes morocco',
  ],
  openGraph: {
    title: 'Morocco Filming Locations | Hollywood of Africa',
    description:
      'Visit the real-world locations of Gladiator, Game of Thrones, James Bond, The Mummy, John Wick, and more. Morocco is the Hollywood of Africa.',
    url: 'https://citytoursmorocco.com/filming-locations',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Ait Benhaddou kasbah - famous filming location in Morocco',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Morocco Filming Locations',
  description:
    'Guide to famous filming locations across Morocco, known as the Hollywood of Africa. Home to Atlas Studios and locations from Gladiator, Game of Thrones, and many more.',
  url: 'https://citytoursmorocco.com/filming-locations',
  touristType: ['Cultural tourism', 'Film tourism'],
  image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=1200',
};

/* ================================================================
   WHY HOLLYWOOD LOVES MOROCCO
   ================================================================ */

const hollywoodReasons = [
  {
    icon: Globe,
    title: 'Diverse Landscapes',
    description:
      'Sahara dunes, snow-capped mountains, ancient medinas, Roman ruins, and Atlantic beaches. Morocco can double for ancient Rome, biblical Jerusalem, Tibet, Egypt, or Mars within a single day of driving.',
  },
  {
    icon: DollarSign,
    title: 'Cost Advantage',
    description:
      'Production costs are 40-60% lower than Hollywood or European locations. Skilled local crews, established infrastructure, and government incentives make Morocco irresistible to studios.',
  },
  {
    icon: Building2,
    title: 'Atlas Studios',
    description:
      'The largest film studio in the world by area sits in Ouarzazate. With permanent sets, prop warehouses, and post-production facilities, it offers Hollywood-grade infrastructure in the desert.',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description:
      'Over 100 years of filmmaking history. From Lawrence of Arabia (1962) to Gladiator (2000) to Game of Thrones (2013-2019), Morocco has a deep bench of film production experience.',
  },
  {
    icon: Calendar,
    title: '300+ Days of Sunshine',
    description:
      'Reliable weather means fewer production delays. The consistent golden-hour light across the desert and kasbahs gives cinematographers predictable, beautiful results year-round.',
  },
  {
    icon: Shield,
    title: 'Government Support',
    description:
      'The Centre Cinematographique Marocain (CCM) streamlines permits in 2-3 weeks. A 20% rebate on local spending and tax exemptions on imported equipment sweeten the deal for international productions.',
  },
  {
    icon: Users,
    title: 'Experienced Local Crews',
    description:
      'Over 30,000 trained crew members work in the Moroccan film industry. Many have decades of experience on international blockbusters and speak Arabic, French, English, and Spanish fluently.',
  },
  {
    icon: Landmark,
    title: 'Unmatched Architecture',
    description:
      'Ancient kasbahs, medieval medinas, Roman ruins at Volubilis, Art Deco neighborhoods in Casablanca, and ornate palaces provide ready-made sets that require zero construction or CGI.',
  },
];

/* ================================================================
   FILMING LOCATIONS DATA - 13 MAJOR LOCATIONS
   ================================================================ */

const filmingLocations = [
  {
    name: 'Ait Benhaddou',
    region: 'Ouarzazate Province',
    image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=800',
    films: ['Gladiator (2000)', 'Game of Thrones (Yunkai)', 'Lawrence of Arabia (1962)', 'The Mummy (1999)', 'Kingdom of Heaven (2005)', 'Prince of Persia (2010)', 'Alexander (2004)', 'Babel (2006)'],
    description:
      'This UNESCO World Heritage kasbah is the single most-filmed location in Morocco and arguably in all of Africa. Its tiered mud-brick architecture has doubled for ancient cities across decades of cinema. In Gladiator, it served as the setting for the slave market where Maximus is sold. In Game of Thrones, it became the slave city of Yunkai, the "Yellow City." The village opposite the kasbah is still inhabited by a handful of families, and you can explore freely. Oliver Stone used it for Alexander, and Ridley Scott returned to it for Kingdom of Heaven. The kasbah\'s honey-colored walls change dramatically with the light, appearing golden at sunrise, stark white at midday, and deep amber at sunset, which is why cinematographers consistently return here.',
    visitTip: 'Visit at sunrise or sunset for the best light and fewest crowds. Cross the river on foot (shallow in summer) or use the footbridge. Allow 1.5-2 hours to explore the kasbah thoroughly, climbing to the granary at the top for panoramic views. Local guides at the entrance can point out exact filming spots.',
  },
  {
    name: 'Atlas Studios, Ouarzazate',
    region: 'Ouarzazate',
    image: 'https://images.unsplash.com/photo-1548018560-c7196e66aca2?q=80&w=800',
    films: ['Gladiator set pieces', 'Kingdom of Heaven sets', 'Ben-Hur (2016)', 'The Jewel of the Nile (1985)', 'Asterix & Obelix: Mission Cleopatra', 'Prison Break (Season 5)', 'The Hills Have Eyes (2006)'],
    description:
      'The largest film studio in Africa and one of the biggest in the world. Founded in 1983 by Italian producer Mohamed Belghmi, Atlas Studios covers over 30 hectares with permanent outdoor sets including an Egyptian temple, a Tibetan monastery, and a Jerusalem street. Prison Break filmed its entire fifth season here, using the studio to recreate a Yemeni prison. The studio has hosted over 200 international productions and continues to attract major film crews year-round. Guided tours walk you through standing film sets where you can pose with props and explore elaborate recreations of ancient civilizations. The scale of the standing sets is genuinely impressive even for visitors who are not film enthusiasts.',
    visitTip: 'Open daily 8:15 AM - 6:15 PM. Allow 1.5-2 hours for the guided tour. The gift shop sells unique props and memorabilia. Ask your guide about which sets are from which films. Photography is allowed throughout.',
  },
  {
    name: 'Essaouira',
    region: 'Atlantic Coast',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=800',
    films: ['Game of Thrones (Astapor / Slaver\'s Bay)', 'Othello (1952, Orson Welles)', 'Alexander (2004)', 'Kingdom of Heaven (2005)', 'John Wick: Chapter 3 (2019)'],
    description:
      'Essaouira\'s 18th-century Portuguese ramparts and fortified harbor became the slave city of Astapor in Game of Thrones Season 3, where Daenerys acquired her Unsullied army in one of the show\'s most iconic scenes -- the "Dracarys" moment that changed the course of the series. The Skala du Port and the medina walls are instantly recognizable to fans. Orson Welles spent months here filming his acclaimed adaptation of Othello in the early 1950s, using the ramparts and narrow streets as his backdrop. Oliver Stone filmed key battle sequences for Alexander here as well. The city\'s windswept beauty and dramatic fortifications require virtually no set dressing to look cinematic, which is why it keeps drawing productions back.',
    visitTip: 'Walk the ramparts for free. The Skala de la Ville (sea bastion) is the key Game of Thrones location. Sunset from the ramparts is spectacular. Look for the Orson Welles plaque near the Skala du Port. The medina walls near Bab Doukkala were used extensively in John Wick 3.',
  },
  {
    name: 'Casablanca',
    region: 'Atlantic Coast',
    image: 'https://images.unsplash.com/photo-1545071677-2df608f54e72?q=80&w=800',
    films: ['Casablanca (1942) - inspired, not filmed here', 'Mission: Impossible - Rogue Nation (2015)', 'The Man Who Knew Too Much (1956)', 'Black Hawk Down (2001, port scenes)'],
    description:
      'While the 1942 classic "Casablanca" was entirely filmed on a Warner Bros. soundstage in Hollywood, the city has embraced its cinematic namesake. Rick\'s Cafe, a real restaurant inspired by the film, was opened in 2004 by a former American diplomat. Decorated in 1940s style with a piano bar, it is a pilgrimage site for film lovers. Parts of Ridley Scott\'s Black Hawk Down used the port area of Casablanca to recreate Mogadishu scenes, and the city\'s Art Deco downtown has featured in numerous international productions. The Hassan II Mosque and the old medina provide striking backdrops that are increasingly popular with streaming productions seeking a modern North African aesthetic.',
    visitTip: 'Rick\'s Cafe is at 248 Boulevard Sour Jdid, in the old medina. Reservations recommended for dinner. Dress smart casual. The Art Deco walking tour of downtown is excellent for anyone who appreciates cinematic architecture.',
  },
  {
    name: 'Marrakech',
    region: 'Central Morocco',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=800',
    films: ['Mission: Impossible - Rogue Nation (2015)', 'Spectre (James Bond, 2015)', 'Inception (2010)', 'Sex and the City 2 (2010)', 'Babel (2006)', 'John Wick: Chapter 3 - Parabellum (2019)', 'The Night Manager (TV, 2016)'],
    description:
      'Marrakech\'s chaotic, photogenic medina and surrounding palm groves have featured in countless productions. The rooftop chase in Mission: Impossible was filmed in the medina. In Inception, Christopher Nolan used the narrow streets and rooftops to create the dreamscape fortress sequence where Cobb and Ariadne explore layered architecture. John Wick 3 filmed a memorable fight scene set in the desert outside Marrakech, and the Hivernage district doubled for Middle Eastern locations in The Night Manager. Sex and the City 2 controversially used Marrakech as a stand-in for Abu Dhabi. The city\'s Marrakech International Film Festival, held each November, draws A-list stars and directors to the Palais des Congres, making it a year-round hub for cinema culture.',
    visitTip: 'The Jemaa el-Fna square is the most frequently filmed spot. Visit the Marrakech International Film Festival in November for celebrity sightings. La Mamounia hotel, which hosted Alfred Hitchcock, is worth a visit for its gardens alone.',
  },
  {
    name: 'Merzouga / Erg Chebbi (Sahara)',
    region: 'Eastern Morocco',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800',
    films: ['The Mummy (1999)', 'Prince of Persia (2010)', 'Babel (2006)', 'Sahara (2005)', 'The Hills Have Eyes (2006)', 'Spectre (2015, desert chase)', 'Star Wars references'],
    description:
      'The towering Erg Chebbi dunes, reaching heights of 150 meters, have served as stand-ins for the Egyptian Sahara, alien deserts, and biblical landscapes. The Mummy used these dunes extensively for its ancient Egypt sequences, with the production spending weeks filming elaborate chase and action scenes across the sand sea. The James Bond film Spectre filmed car chase scenes in the desert south of Erfoud. The vast, undulating golden sand is endlessly versatile on screen, and the nearby Rissani oasis and Berber villages add to the location options. The desert landscape changes dramatically with the light, from fiery orange at dawn to blinding white at midday to deep purple at dusk.',
    visitTip: 'Best combined with a desert camp overnight. Sunrise from the top of the dunes is the most cinematic experience you can have in Morocco. The town of Erfoud, nearby, has also been used in multiple productions. Camel trekking at golden hour recreates the classic Lawrence of Arabia aesthetic.',
  },
  {
    name: 'Fes',
    region: 'Northern Morocco',
    image: 'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?q=80&w=800',
    films: ['The Bourne Ultimatum (2007)', 'John Wick: Chapter 3 (2019)', 'Spectre (2015, interiors)', 'Babel (2006)', 'Jack Ryan (TV, Season 1)'],
    description:
      'The labyrinthine medina of Fes el-Bali is the world\'s largest car-free urban area, with 9,000+ narrow alleys that create perfect chase-scene settings. The Bourne Ultimatum\'s climactic rooftop chase was filmed across the tannery quarter and narrow passages of the medina. While officially set in Tangier in the film, most of the chase was actually shot in Fes because the rooftop geography was more suitable for the action sequences. The Amazon series Jack Ryan also filmed sequences here, using the medina\'s atmospheric alleys for its Moroccan episodes. The medieval atmosphere requires zero set dressing, which is what makes Fes the go-to location for productions needing an authentic ancient city feel.',
    visitTip: 'The Chouara tannery area and Bab Boujloud (Blue Gate) are the most recognizable filming spots. A guide is essential to navigate the medina. Ask your guide to show you the specific rooftops used in The Bourne Ultimatum.',
  },
  {
    name: 'Tangier',
    region: 'Northern Morocco',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=800',
    films: ['The Bourne Ultimatum (2007)', 'Spectre (2015)', 'Only Lovers Left Alive (2013)', 'The Sheltering Sky (1990)', 'Inception (2010, Tangier cafe)', 'Homeland (TV, Season 5 interiors)'],
    description:
      'Tangier\'s dramatic position at the Strait of Gibraltar has attracted filmmakers for decades. The Bourne Ultimatum\'s intense chase sequences were filmed through the Kasbah and Grand Socco. Jim Jarmusch\'s vampire film Only Lovers Left Alive used the atmospheric decay of Tangier\'s old town to stunning effect, with Tilda Swinton wandering the atmospheric streets at night. Paul Bowles\' novel The Sheltering Sky was adapted into a film by Bernardo Bertolucci, who shot key sequences in and around the city. Tangier\'s literary and artistic history -- home to the Beats, to Paul Bowles, to Henri Matisse -- adds layers of cultural depth to any visit. The city\'s position between two continents gives it a liminal quality that filmmakers find irresistible.',
    visitTip: 'Walk from the Grand Socco through the Petit Socco to the Kasbah for the main filming locations. Cafe Hafa has hosted everyone from the Rolling Stones to film crews. The Cinematheque de Tanger screens classic films.',
  },
  {
    name: 'Ouarzazate (Town Center)',
    region: 'Draa-Tafilalet',
    image: 'https://images.unsplash.com/photo-1548018560-c7196e66aca2?q=80&w=800',
    films: ['Lawrence of Arabia (1962)', 'Game of Thrones (exterior shots)', 'The Living Daylights (James Bond, 1987)', 'Kundun (1997)', 'Babel (2006)'],
    description:
      'Known as the "Hollywood of Africa" or "Ouallywood," this small desert city at the foot of the High Atlas has been a film production hub since the 1960s. Beyond Atlas Studios and CLA Studios, the Taourirt Kasbah in the town center has appeared in numerous films. Martin Scorsese filmed his Dalai Lama biopic Kundun here. The Kasbah\'s elaborate interiors and its setting against the dry mountains have made it one of the most versatile filming locations in Morocco. CLA Studios (Centre de Loisirs et d\'Activites) is where interior Game of Thrones scenes were filmed, and it hosts its own impressive collection of standing sets and production facilities. The town itself has a relaxed, almost surreal atmosphere, as you might encounter film crews setting up for a production on any given day.',
    visitTip: 'The Taourirt Kasbah is in the center of town and charges a small entry fee. Combine it with Atlas Studios (5km west) and CLA Studios for a full day of film tourism. The Cinema Museum in town is worth a quick stop.',
  },
  {
    name: 'Todra Gorge',
    region: 'High Atlas',
    image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=800',
    films: ['Various adventure and historical films', 'TV commercials', 'Automotive advertisements', 'Homeland (TV, driving sequences)'],
    description:
      'This dramatic limestone gorge with 300-meter vertical walls creates an awe-inspiring natural set. The narrow canyon road winding between towering cliffs has been used in adventure films, car commercials, and historical dramas. The gorge is a popular rock climbing destination with over 150 bolted routes. The scale of the canyon walls gives any footage filmed here an epic, larger-than-life quality that is difficult to replicate with CGI. The deep red and orange tones of the limestone catch the light beautifully, and the narrow canyon floor creates natural shadow play that cinematographers prize.',
    visitTip: 'Drive into the gorge in the morning when the light hits the red walls. Walk the first 600 meters of the canyon for the most dramatic section. Rock climbers can find guidebooks at the small shops near the gorge entrance.',
  },
  {
    name: 'Skoura Oasis',
    region: 'Ouarzazate Province',
    image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=800',
    films: ['Kingdom of Heaven (2005)', 'Various historical productions', 'Prince of Persia (2010)'],
    description:
      'The lush palm oasis of Skoura, with its dozens of crumbling kasbahs scattered among date palms, provided key locations for Ridley Scott\'s Kingdom of Heaven, serving as the approach to Jerusalem. The Amridil Kasbah, one of Morocco\'s most photogenic, is featured on the 50-dirham banknote and has appeared in several productions. The contrast between the verdant palm groves and the arid mountains beyond creates a visually stunning backdrop that cinematographers prize. The oasis stretches for several kilometers and contains dozens of kasbahs in various states of preservation, from fully restored to romantically ruined.',
    visitTip: 'Visit the Amridil Kasbah (small entry fee). Rent a bicycle to explore the oasis roads. The kasbahs look best in late afternoon light when the mud-brick walls glow gold.',
  },
  {
    name: 'Tit Mellil & Sale (near Rabat)',
    region: 'Rabat-Sale Region',
    image: 'https://images.unsplash.com/photo-1577147443647-81856d5151af?q=80&w=800',
    films: ['Black Hawk Down (2001)', 'Body of Lies (2008)', 'American Sniper (2014)'],
    description:
      'Ridley Scott\'s Black Hawk Down, depicting the 1993 Battle of Mogadishu, was primarily filmed in the town of Sale, across the river from Rabat. The narrow streets and flat-roofed buildings of Sale\'s medina were used to recreate the Bakara Market area of Mogadishu. The film crew spent months constructing sets and modifying buildings to match the Somali capital. Ridley Scott later returned to Morocco for Body of Lies, using locations around Rabat and the surrounding region. Clint Eastwood\'s American Sniper also used locations near Rabat and Kenitra to recreate Iraqi urban environments, demonstrating how convincingly Morocco can stand in for Middle Eastern cities.',
    visitTip: 'Sale\'s medina is easily accessible from Rabat via the tramway. While the film sets have been removed, the atmospheric narrow streets that made it a convincing stand-in for Mogadishu are still there to explore.',
  },
  {
    name: 'Erfoud & Rissani',
    region: 'Draa-Tafilalet',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800',
    films: ['The Mummy (1999)', 'The Mummy Returns (2001)', 'Spectre (2015)', 'Sahara (2005)', 'Salmon Fishing in the Yemen (2011)'],
    description:
      'The desert flatlands and fossil-rich terrain around Erfoud and Rissani have served as the backdrop for some of Hollywood\'s most ambitious desert sequences. The Mummy franchise used this region extensively, with the ancient ruins at nearby Rissani providing authenticity for the Egyptian temple scenes. Spectre\'s thrilling car chase between Bond and Hinx was filmed on the desert roads south of Erfoud, with the dry lakebeds providing perfect flat terrain for high-speed pursuit sequences. Salmon Fishing in the Yemen used the striking desert landscapes as a stand-in for the Arabian Peninsula. The area\'s proximity to Merzouga and the Erg Chebbi dunes makes it part of a larger filming corridor.',
    visitTip: 'Combine Erfoud with a visit to the Erg Chebbi dunes at Merzouga. The fossil market in Erfoud is a unique stop. The road between Erfoud and Ouarzazate passes through some of the most filmed desert landscapes in the world.',
  },
];

/* ================================================================
   TV SERIES DATA - 8 SHOWS
   ================================================================ */

const tvSeriesLocations = [
  {
    title: 'Game of Thrones',
    seasons: 'Seasons 3-6 (2013-2016)',
    locations: 'Ait Benhaddou (Yunkai), Essaouira (Astapor), Ouarzazate/CLA Studios (interiors)',
    description:
      'Morocco provided some of the most memorable locations in Game of Thrones. Ait Benhaddou became Yunkai, the "Yellow City" that Daenerys liberates. Essaouira\'s Portuguese ramparts became Astapor, where Daenerys acquires the Unsullied in the iconic "Dracarys" scene. CLA Studios in Ouarzazate was used for extensive interior filming of Slaver\'s Bay sequences.',
    image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=600',
  },
  {
    title: 'Jack Ryan',
    seasons: 'Season 1 (2018)',
    locations: 'Fes, Marrakech, Errachidia region',
    description:
      'The Amazon Prime series used Morocco extensively for its first season, with the Fes medina standing in for various Middle Eastern locations. The show\'s production team praised Morocco\'s combination of authentic architecture and professional local crews. Several chase and action sequences were filmed in the narrow alleys of Fes el-Bali.',
    image: 'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?q=80&w=600',
  },
  {
    title: 'The Night Manager',
    seasons: 'Miniseries (2016)',
    locations: 'Marrakech, the High Atlas, desert locations',
    description:
      'The BBC/AMC adaptation of John le Carre\'s novel used Morocco for its lavish Middle Eastern sequences. The luxury riads and palatial estates around Marrakech doubled for the world of arms dealers and spies. The High Atlas Mountains provided dramatic backdrops for key scenes featuring Tom Hiddleston and Hugh Laurie.',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=600',
  },
  {
    title: 'Homeland',
    seasons: 'Multiple seasons (2011-2020)',
    locations: 'Rabat, Casablanca, Essaouira, rural Morocco',
    description:
      'The Showtime series used Morocco as a stand-in for various Middle Eastern and North African settings throughout its run. The production team valued Morocco\'s ability to convincingly portray multiple different countries within short driving distances. Interior and exterior shots were filmed across several Moroccan cities.',
    image: 'https://images.unsplash.com/photo-1577147443647-81856d5151af?q=80&w=600',
  },
  {
    title: 'Prison Break',
    seasons: 'Season 5 (2017)',
    locations: 'Ouarzazate, Atlas Studios, surrounding desert',
    description:
      'The revival season of Prison Break was set largely in Yemen, but filmed almost entirely in and around Ouarzazate. Atlas Studios was used to build the elaborate prison sets, while the surrounding desert and kasbahs provided the exterior shots. The production brought significant economic activity to the Ouarzazate region.',
    image: 'https://images.unsplash.com/photo-1548018560-c7196e66aca2?q=80&w=600',
  },
  {
    title: 'The Old Guard',
    seasons: 'Film (2020, Netflix)',
    locations: 'Marrakech, Essaouira, desert locations',
    description:
      'This Netflix action film starring Charlize Theron filmed extensively in Morocco. The Marrakech medina and Essaouira\'s streets were used for key action sequences, while the surrounding desert provided the backdrop for the film\'s more epic moments. It was one of the first major Netflix originals to film in Morocco.',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=600',
  },
  {
    title: 'Tyrant',
    seasons: 'Seasons 1-3 (2014-2016)',
    locations: 'Ouarzazate, Marrakech, Atlas region',
    description:
      'This FX political drama about a fictional Middle Eastern dictatorship filmed extensively in Morocco across all three seasons. Ouarzazate and the surrounding region doubled convincingly for the show\'s fictional nation of Abbudin, with Atlas Studios providing interior sets and the kasbahs serving as government buildings.',
    image: 'https://images.unsplash.com/photo-1548018560-c7196e66aca2?q=80&w=600',
  },
  {
    title: 'Raised by Wolves',
    seasons: 'Seasons 1-2 (2020-2022)',
    locations: 'Atlas Studios, Ouarzazate desert, volcanic landscapes',
    description:
      'Ridley Scott\'s ambitious HBO Max sci-fi series used the alien-looking landscapes around Ouarzazate and Atlas Studios to create the planet Kepler-22b. The barren, otherworldly desert terrain proved perfect for depicting a hostile extraterrestrial world, demonstrating Morocco\'s versatility beyond historical and political dramas.',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=600',
  },
];

/* ================================================================
   COMPLETE FILMOGRAPHY TABLE - 25+ ENTRIES
   ================================================================ */

const completeFilmography = [
  { title: 'Othello', year: 1952, director: 'Orson Welles', locations: 'Essaouira, Safi', genre: 'Drama' },
  { title: 'The Man Who Knew Too Much', year: 1956, director: 'Alfred Hitchcock', locations: 'Marrakech (Jemaa el-Fna)', genre: 'Thriller' },
  { title: 'Lawrence of Arabia', year: 1962, director: 'David Lean', locations: 'Ouarzazate, Ait Benhaddou, desert regions', genre: 'Epic' },
  { title: 'The Living Daylights', year: 1987, director: 'John Glen', locations: 'Ouarzazate, Tangier', genre: 'Action' },
  { title: 'The Sheltering Sky', year: 1990, director: 'Bernardo Bertolucci', locations: 'Tangier, Ouarzazate, Erfoud', genre: 'Drama' },
  { title: 'Kundun', year: 1997, director: 'Martin Scorsese', locations: 'Ouarzazate, Atlas Studios', genre: 'Drama' },
  { title: 'The Mummy', year: 1999, director: 'Stephen Sommers', locations: 'Erfoud, Erg Chebbi, Ait Benhaddou', genre: 'Adventure' },
  { title: 'Gladiator', year: 2000, director: 'Ridley Scott', locations: 'Ait Benhaddou, Ouarzazate, Atlas Studios', genre: 'Epic' },
  { title: 'Black Hawk Down', year: 2001, director: 'Ridley Scott', locations: 'Sale, Rabat region, Kenitra', genre: 'War' },
  { title: 'Alexander', year: 2004, director: 'Oliver Stone', locations: 'Essaouira, Marrakech, Ait Benhaddou', genre: 'Epic' },
  { title: 'Kingdom of Heaven', year: 2005, director: 'Ridley Scott', locations: 'Ouarzazate, Ait Benhaddou, Skoura, Essaouira', genre: 'Epic' },
  { title: 'Sahara', year: 2005, director: 'Breck Eisner', locations: 'Erfoud, desert regions, Ouarzazate', genre: 'Adventure' },
  { title: 'Babel', year: 2006, director: 'Alejandro Gonzalez Inarritu', locations: 'Ouarzazate region, Taguenzalt, Atlas Mountains', genre: 'Drama' },
  { title: 'The Bourne Ultimatum', year: 2007, director: 'Paul Greengrass', locations: 'Tangier, Fes (doubling as Tangier)', genre: 'Action' },
  { title: 'Body of Lies', year: 2008, director: 'Ridley Scott', locations: 'Rabat, Fes, desert regions', genre: 'Thriller' },
  { title: 'Inception', year: 2010, director: 'Christopher Nolan', locations: 'Tangier (cafe scenes), Marrakech', genre: 'Sci-Fi' },
  { title: 'Sex and the City 2', year: 2010, director: 'Michael Patrick King', locations: 'Marrakech (doubling as Abu Dhabi)', genre: 'Comedy' },
  { title: 'Prince of Persia', year: 2010, director: 'Mike Newell', locations: 'Ait Benhaddou, Ouarzazate, Erfoud, Skoura', genre: 'Adventure' },
  { title: 'Salmon Fishing in the Yemen', year: 2011, director: 'Lasse Hallstrom', locations: 'Erfoud, desert regions, Atlas Mountains', genre: 'Drama' },
  { title: 'Only Lovers Left Alive', year: 2013, director: 'Jim Jarmusch', locations: 'Tangier medina', genre: 'Drama' },
  { title: 'American Sniper', year: 2014, director: 'Clint Eastwood', locations: 'Rabat, Kenitra region', genre: 'War' },
  { title: 'Mission: Impossible - Rogue Nation', year: 2015, director: 'Christopher McQuarrie', locations: 'Marrakech, Casablanca', genre: 'Action' },
  { title: 'Spectre (James Bond)', year: 2015, director: 'Sam Mendes', locations: 'Tangier, Erfoud, Oujda, desert regions', genre: 'Action' },
  { title: 'Ben-Hur', year: 2016, director: 'Timur Bekmambetov', locations: 'Atlas Studios, Ouarzazate', genre: 'Epic' },
  { title: 'John Wick: Chapter 3 - Parabellum', year: 2019, director: 'Chad Stahelski', locations: 'Essaouira, Marrakech, desert locations', genre: 'Action' },
  { title: 'The Old Guard', year: 2020, director: 'Gina Prince-Bythewood', locations: 'Marrakech, Essaouira', genre: 'Action' },
  { title: 'Army of the Dead', year: 2021, director: 'Zack Snyder', locations: 'Atlas Studios, Ouarzazate region', genre: 'Action' },
];

/* ================================================================
   FILM TOURS
   ================================================================ */

const filmTours = [
  {
    name: 'Ouarzazate Film Trail',
    duration: '2 days',
    description:
      'The essential film location tour. Start at Atlas Studios for a guided walk through standing sets from Gladiator, Kingdom of Heaven, and Prison Break. Then drive 30 minutes to Ait Benhaddou for sunset -- the most-filmed kasbah in the world. Day 2: visit the Taourirt Kasbah in town, explore CLA Studios where Game of Thrones interiors were filmed, and optionally continue to Skoura Oasis to see the Kingdom of Heaven locations.',
    stops: ['Atlas Studios', 'Ait Benhaddou', 'Taourirt Kasbah', 'CLA Studios', 'Skoura Oasis (optional)', 'Cinema Museum'],
    films: 'Gladiator, Game of Thrones, Kingdom of Heaven, Lawrence of Arabia, Prison Break',
  },
  {
    name: 'Northern Morocco Film Circuit',
    duration: '3-4 days',
    description:
      'Cover the key filming locations in northern Morocco. Day 1: Tangier -- walk the Bourne Ultimatum chase route through the Kasbah, visit Cafe Hafa, and see the Cinematheque. Day 2: Drive to Fes and explore the medina, identifying tannery rooftops from The Bourne Ultimatum and Jack Ryan. Day 3: Drive to Essaouira for Game of Thrones ramparts and the Orson Welles filming spots. Day 4 (optional): Return via Casablanca for Rick\'s Cafe and Art Deco tour.',
    stops: ['Tangier Kasbah', 'Fes el-Bali medina', 'Essaouira ramparts', 'Skala du Port', 'Rick\'s Cafe (Casablanca)', 'Cinematheque de Tanger'],
    films: 'The Bourne Ultimatum, Jack Ryan, Game of Thrones, Othello, Casablanca',
  },
  {
    name: 'Desert & Mountains Film Route',
    duration: '5 days',
    description:
      'Marrakech to the Sahara through film country. Day 1: Marrakech medina (Mission Impossible, John Wick, Inception). Day 2: Cross the Tizi n\'Tichka pass to Ouarzazate and visit Atlas Studios. Day 3: Ait Benhaddou and Todra Gorge. Day 4: Continue to Erfoud and Merzouga -- The Mummy and Spectre desert locations. Camp overnight in the Erg Chebbi dunes. Day 5: Return via the Dades Valley and Rose Valley, or continue east.',
    stops: ['Marrakech medina', 'Atlas Studios', 'Ait Benhaddou', 'Todra Gorge', 'Erfoud', 'Merzouga / Erg Chebbi dunes'],
    films: 'Mission: Impossible, John Wick, Gladiator, The Mummy, Spectre, Babel',
  },
  {
    name: 'Ridley Scott Morocco Trail',
    duration: '4 days',
    description:
      'Follow in the footsteps of Morocco\'s most prolific Hollywood director. Ridley Scott has filmed more major productions in Morocco than any other director, returning again and again for Gladiator, Kingdom of Heaven, Black Hawk Down, Body of Lies, and Raised by Wolves. Day 1: Sale and Rabat (Black Hawk Down locations). Day 2: Drive to Ouarzazate via the Atlas (Gladiator, Kingdom of Heaven). Day 3: Ait Benhaddou and Skoura. Day 4: Erfoud and desert regions.',
    stops: ['Sale medina (Black Hawk Down)', 'Ouarzazate & Atlas Studios', 'Ait Benhaddou', 'Skoura Oasis', 'Erfoud desert'],
    films: 'Gladiator, Black Hawk Down, Kingdom of Heaven, Body of Lies, Raised by Wolves',
  },
  {
    name: 'James Bond in Morocco',
    duration: '3 days',
    description:
      'Trace 007\'s Moroccan adventures across three Bond films. Day 1: Tangier -- visit the locations from The Living Daylights (1987) and Spectre (2015), including the Grand Socco and the Kasbah quarter where Bond navigates the streets. Day 2: Travel south to Oujda and Erfoud to see the Spectre desert chase locations. Day 3: Explore the desert roads where the iconic car chase between Bond\'s Aston Martin and Hinx\'s Jaguar was filmed, and visit Merzouga for the Sahara backdrop.',
    stops: ['Tangier Kasbah (The Living Daylights)', 'Grand Socco (Spectre)', 'Oujda outskirts', 'Erfoud desert roads', 'Merzouga dunes'],
    films: 'The Living Daylights, Spectre, Casino Royale (nearby)',
  },
];

/* ================================================================
   PROFESSIONAL FILM TOUR OPERATORS
   ================================================================ */

const tourOperators = [
  {
    name: 'Morocco Film Tours',
    specialty: 'Dedicated film location tours across all regions',
    description:
      'Specialized operator offering multi-day guided tours of major filming locations from Marrakech to the Sahara. Their guides are former film industry professionals who can share behind-the-scenes stories from actual productions. Tours range from single-day Ouarzazate visits to 10-day comprehensive circuits.',
    priceRange: '800-3,000 MAD per person per day',
    languages: 'English, French, Arabic, Spanish',
  },
  {
    name: 'Atlas Film Studio Tours',
    specialty: 'Ouarzazate studio complex tours',
    description:
      'The official tour operator for Atlas Studios. Their guided tours include access to standing sets, prop warehouses, and occasionally active production areas. They also arrange combined packages with Ait Benhaddou and CLA Studios, making it easy to see everything in one or two days.',
    priceRange: '60-200 MAD per person (studio tours)',
    languages: 'English, French, Arabic, German',
  },
  {
    name: 'Game of Thrones Morocco Tours',
    specialty: 'GoT-specific filming locations',
    description:
      'A niche operator that focuses exclusively on Game of Thrones filming locations. Their guides carry tablets loaded with screenshots from specific scenes so you can compare the on-screen locations with the real ones. Tours cover Ait Benhaddou (Yunkai), Essaouira (Astapor), and CLA Studios (interiors).',
    priceRange: '1,200-2,500 MAD per person per day',
    languages: 'English, French',
  },
  {
    name: 'Sahara Desert Film Expeditions',
    specialty: 'Desert filming locations with luxury camp stays',
    description:
      'Combining film tourism with luxury desert camping, this operator takes visitors to The Mummy, Spectre, and Prince of Persia filming locations in the Erfoud-Merzouga corridor. Overnight stays in premium desert camps under the stars replicate the cinematic desert experience.',
    priceRange: '2,500-5,000 MAD per person (2-3 day trips)',
    languages: 'English, French, Arabic',
  },
];

/* ================================================================
   ATLAS STUDIOS VISITOR GUIDE
   ================================================================ */

const atlasStudiosGuide = {
  hours: '8:15 AM - 6:15 PM daily (including weekends and holidays)',
  entry: '60 MAD adults / 30 MAD children (prices subject to change)',
  duration: '1.5-2 hours for the standard guided tour',
  location: 'Km 5, Route de Marrakech, Ouarzazate',
  whatToSee: [
    'Egyptian temple set (used in The Mummy, Cleopatra, and others)',
    'Tibetan monastery replica (from Kundun and Seven Years in Tibet)',
    'Jerusalem street scene set (Kingdom of Heaven)',
    'Medieval castle and fortress walls (various productions)',
    'Aircraft and vehicle props from war films',
    'Roman arena elements from Gladiator',
    'Costume and prop warehouses (when accessible)',
    'Gift shop with unique movie memorabilia and replica props',
  ],
  tips: [
    'Book a guide at the entrance. They share fascinating behind-the-scenes stories and know which sets were used in which films.',
    'Bring water and sun protection. The outdoor sets have minimal shade and temperatures can exceed 40C in summer.',
    'Photography is allowed throughout. Bring a wide-angle lens for the massive sets.',
    'Visit early morning or late afternoon for the best light on the outdoor sets.',
    'Combine with a visit to nearby Ait Benhaddou (30 minutes away) for a full day of film locations.',
    'Some sets may be off-limits during active productions. Check at the entrance for current access.',
    'CLA Studios is a separate facility nearby. Ask at Atlas Studios about combined visits.',
  ],
};

/* ================================================================
   CLA STUDIOS GUIDE
   ================================================================ */

const claStudiosGuide = {
  hours: '9:00 AM - 5:30 PM (closed during active productions)',
  entry: '50 MAD adults / 25 MAD children',
  duration: '1-1.5 hours',
  location: 'Route de Marrakech, Ouarzazate (3km from Atlas Studios)',
  highlights: [
    'Game of Thrones Slaver\'s Bay interior sets (when accessible)',
    'Standing desert fortress and palace sets from historical productions',
    'Sound stages used for major international productions',
    'Prop and costume storage areas with items from dozens of films',
    'Outdoor desert sets including military encampments and ancient ruins',
    'Behind-the-scenes photographs and production documentation on display',
  ],
};

/* ================================================================
   BEHIND THE SCENES EXPERIENCES
   ================================================================ */

const behindTheScenes = [
  {
    title: 'Walk Through Standing Film Sets',
    description:
      'Atlas Studios and CLA Studios maintain permanent outdoor sets that visitors can explore freely during guided tours. Walk through a recreated Egyptian temple, wander a medieval Jerusalem street, and pose in a Roman arena. These are not museum reproductions -- they are actual film sets used in major Hollywood productions.',
    icon: Building2,
  },
  {
    title: 'Meet Local Film Industry Professionals',
    description:
      'Many guides at Atlas Studios and CLA Studios are former crew members who worked on the productions. They can share first-hand stories about working with directors like Ridley Scott, about the logistics of building sets in the desert, and about the creative problem-solving that makes Morocco\'s film industry unique.',
    icon: Users,
  },
  {
    title: 'Watch Active Productions (When Available)',
    description:
      'Morocco hosts film crews year-round. If you are lucky, you may spot active filming in locations like Ouarzazate, Marrakech, or the desert. While sets are closed to the public during active filming, the surrounding areas often offer glimpses of the production infrastructure -- trailers, equipment trucks, and crew bustling about.',
    icon: Video,
  },
  {
    title: 'Attend the Marrakech International Film Festival',
    description:
      'Held every November, the Marrakech International Film Festival is championed by Martin Scorsese and attracts global cinema stars. The festival includes public screenings, masterclasses, and red carpet events. It is an opportunity to experience Morocco\'s film culture at its most glamorous, with screenings in the stunning Palais des Congres.',
    icon: Award,
  },
  {
    title: 'Visit the Cinema Museum of Ouarzazate',
    description:
      'This small but fascinating museum in the center of Ouarzazate documents the region\'s century-long film history with posters, props, photographs, and equipment from major productions. It provides excellent context before visiting the studios and outdoor filming locations.',
    icon: Landmark,
  },
  {
    title: 'Recreate Iconic Scenes',
    description:
      'Many visitors come to Morocco specifically to recreate iconic film moments at the actual locations. Stand at the Skala in Essaouira where Daenerys commanded "Dracarys." Walk the rooftops of Fes where Jason Bourne fled his pursuers. Climb Ait Benhaddou where Maximus was sold into slavery. Local guides know exactly where to stand for the perfect recreation photograph.',
    icon: Camera,
  },
];

/* ================================================================
   MOROCCAN CINEMA INDUSTRY
   ================================================================ */

const moroccanCinema = [
  {
    title: 'Notable Moroccan Directors',
    content:
      'Morocco has produced internationally acclaimed filmmakers including Nabil Ayouch (Casablanca Beats, Much Loved), Maryam Touzani (The Blue Caftan, Adam), Nour-Eddine Lakhmari (Casanegra), and Faouzi Bensaidi (Volubilis). These directors have won awards at Cannes, Venice, and Berlin, bringing global attention to Moroccan storytelling.',
  },
  {
    title: 'Film Festivals',
    content:
      'The Marrakech International Film Festival (November) attracts global stars and directors. Martin Scorsese is the festival\'s longtime champion. Other notable festivals include the Tangier National Film Festival, the Zagora Festival of Saharan Film, the Tetouan Mediterranean Film Festival, and the FICAM animation festival in Meknes.',
  },
  {
    title: 'Moroccan Cinema Themes',
    content:
      'Contemporary Moroccan film explores social issues including gender roles, class divides, migration, LGBTQ+ experiences, and the tension between tradition and modernity. The industry has grown rapidly since the 2000s with government funding and international co-productions, producing 20-30 feature films per year.',
  },
  {
    title: 'Streaming & International Recognition',
    content:
      'Moroccan films are increasingly available on Netflix, MUBI, and international platforms. "The Blue Caftan" (2022) received an Oscar nomination for Best International Feature Film. Casablanca Beats (Haut et Fort) won the Jury Prize at Cannes 2021. Nabil Ayouch\'s "Everybody Loves Touda" premiered at Cannes 2024.',
  },
];

/* ================================================================
   FILM ECONOMY STATS
   ================================================================ */

const filmEconomy = [
  {
    stat: '100+',
    label: 'Major international productions filmed in Morocco since 2000',
  },
  {
    stat: '$300M+',
    label: 'Annual revenue generated by film tourism and production',
  },
  {
    stat: '30,000+',
    label: 'Moroccan crew members employed in the film industry',
  },
  {
    stat: '2',
    label: 'World-class studios (Atlas Studios and CLA Studios in Ouarzazate)',
  },
  {
    stat: '1919',
    label: 'Year of Morocco\'s first film production (by French filmmakers)',
  },
  {
    stat: '20%',
    label: 'Rebate on local spending offered to international productions',
  },
];

/* ================================================================
   VISITING TIPS
   ================================================================ */

const visitingTips = [
  {
    title: 'Best Time for Film Location Visits',
    description: 'Spring (March-May) and autumn (September-November) offer the best weather for visiting outdoor filming locations. Summer can be brutally hot in the desert regions around Ouarzazate and Merzouga. Winter is pleasant in Marrakech and on the coast but cold in the mountains.',
    icon: Calendar,
  },
  {
    title: 'Transportation Between Locations',
    description: 'A rental car is ideal for the film location trail, especially the Ouarzazate-Merzouga route. Alternatively, hire a private driver or join a small-group tour. Public transport connects major cities but not remote film locations like Ait Benhaddou or Erg Chebbi.',
    icon: Compass,
  },
  {
    title: 'Photography Etiquette',
    description: 'Photography is allowed at all outdoor filming locations and at both Atlas and CLA Studios. In medinas, be respectful when photographing locals. Some craft vendors may expect a small tip if you photograph their stalls. Drone regulations are strict in Morocco; permits are required.',
    icon: Camera,
  },
  {
    title: 'Combining Film Tours with Other Activities',
    description: 'Film locations often overlap with Morocco\'s other attractions. Ait Benhaddou is a UNESCO site in its own right. The Fes medina is one of the world\'s great historical cities. Essaouira is a beloved beach and surf town. You do not need to be a film buff to enjoy these destinations.',
    icon: Map,
  },
  {
    title: 'Guided vs. Self-Guided',
    description: 'Atlas Studios requires a guided tour (included in admission). For locations like Ait Benhaddou and the Fes medina, hiring a local guide adds enormously to the experience, as they can point out exact filming spots and share behind-the-scenes stories. Many guides specialize in film tours.',
    icon: Users,
  },
  {
    title: 'Accommodation Near Film Locations',
    description: 'Ouarzazate has the widest range of accommodation for film tourism, from budget hotels to luxury kasbahs. For Ait Benhaddou, stay in one of the charming guesthouses directly facing the kasbah. In the desert, luxury camp experiences in Erg Chebbi combine film landscapes with unforgettable stargazing.',
    icon: Building2,
  },
];

/* ================================================================
   RECENT & UPCOMING PRODUCTIONS
   ================================================================ */

const recentProductions = [
  {
    title: 'Netflix Originals',
    description:
      'Netflix has significantly increased its production presence in Morocco. Films like The Old Guard (2020) and Army of the Dead (2021) used Moroccan locations extensively. The streaming giant has also developed relationships with Moroccan production companies, signaling a long-term commitment to the country as a filming destination.',
  },
  {
    title: 'Amazon Studios',
    description:
      'Amazon\'s Jack Ryan series was a landmark production for Morocco, showcasing the country\'s ability to host large-scale action television. The success of the Moroccan episodes led to further Amazon productions considering Morocco for their location needs.',
  },
  {
    title: 'HBO / Warner Bros.',
    description:
      'Ridley Scott\'s Raised by Wolves (2020-2022) for HBO Max pushed the boundaries of what Morocco could offer, using the desert landscapes as an alien planet. This expanded Morocco\'s filmography beyond historical and political genres into science fiction.',
  },
  {
    title: 'International Co-Productions',
    description:
      'Morocco is increasingly involved in European and Asian co-productions, with Italian, French, Indian, and South Korean production companies using Moroccan locations and crews. The diversity of incoming productions continues to grow each year.',
  },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function FilmingLocationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════ */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=2800)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Filming Locations</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Clapperboard className="w-4 h-4 text-[var(--color-accent)]" />
            Film Tourism
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco in Film &amp; TV
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            From Gladiator&apos;s arena to Game of Thrones&apos; slave cities, from James Bond car chases to
            John Wick desert fights. Discover why Morocco is the Hollywood of Africa and visit the real locations.
          </p>
          {/* Quick-jump location links */}
          <div className="flex flex-wrap gap-2">
            {['Ait Benhaddou', 'Atlas Studios', 'Essaouira', 'Marrakech', 'Fes', 'Tangier', 'Sahara Desert'].map((loc) => (
              <a
                key={loc}
                href={`#${loc.toLowerCase().replace(/[\s/]+/g, '-')}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs font-medium hover:bg-white/20 transition-colors"
              >
                <MapPin className="w-3 h-3" /> {loc}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ═══════════════════════════════════════════
          HOLLYWOOD OF AFRICA
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            The Hollywood of Africa
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-3xl mx-auto mb-12">
            For over a century, Morocco has been one of the world&apos;s most sought-after filming destinations.
            Its combination of dramatic landscapes, ancient architecture, low costs, and established studios
            makes it irreplaceable for international productions.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {filmEconomy.map((item) => (
              <div key={item.label} className="text-center p-5 card-moroccan">
                <div className="stat-number text-2xl md:text-3xl mb-2">{item.stat}</div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Why Morocco Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hollywoodReasons.map((reason) => (
              <div key={reason.title} className="card-moroccan p-6">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <reason.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{reason.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAMOUS FILMING LOCATIONS
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Famous Filming Locations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Walk in the footsteps of gladiators, spies, and dragons. These are Morocco&apos;s most iconic film locations that you can visit today.
          </p>

          <div className="space-y-10">
            {filmingLocations.map((location, index) => (
              <div key={location.name} id={location.name.toLowerCase().replace(/[\s/]+/g, '-')} className="scroll-mt-24">
                <div className={`card-moroccan overflow-hidden flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Image */}
                  <div className="lg:w-2/5 relative h-64 lg:h-auto min-h-[300px]">
                    <img
                      src={location.image}
                      alt={`${location.name} filming location in Morocco`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm font-medium">
                        <MapPin className="w-3.5 h-3.5" /> {location.region}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-3/5 p-6 lg:p-8">
                    <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                      {location.name}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{location.description}</p>

                    {/* Films */}
                    <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2 uppercase tracking-wider flex items-center gap-1.5">
                      <Film className="w-3.5 h-3.5 text-[var(--color-primary)]" /> Featured In
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {location.films.map((film) => (
                        <span key={film} className="tag tag-accent">
                          <Play className="w-3 h-3 mr-1" />
                          {film}
                        </span>
                      ))}
                    </div>

                    {/* Visit Tip */}
                    <div className="p-3 rounded-lg bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10">
                      <p className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                        <Eye className="w-4 h-4 text-[var(--color-primary)] mt-0.5 shrink-0" />
                        <span><strong className="text-[var(--text-primary)]">Visitor Tip:</strong> {location.visitTip}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TV SERIES SECTION
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-secondary)]/10 mb-4">
              <Tv className="w-6 h-6 text-[var(--color-secondary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              TV Series Filmed in Morocco
            </h2>
            <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto">
              It is not just Hollywood films. Major television productions have made Morocco a second home, from premium cable dramas to streaming blockbusters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tvSeriesLocations.map((show) => (
              <div key={show.title} className="card-moroccan overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={show.image}
                    alt={`${show.title} filming location in Morocco`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-bold">
                      <Tv className="w-3 h-3" /> {show.seasons}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                    {show.title}
                  </h3>
                  <p className="text-xs text-[var(--color-primary)] font-semibold mb-2 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {show.locations}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {show.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          COMPLETE FILMOGRAPHY TABLE
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Film className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Complete Morocco Filmography
            </h2>
            <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto">
              A selection of major international films shot partially or entirely in Morocco, spanning seven decades of cinema.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-primary)]/20">
                  <th className="text-left py-3 px-4 font-bold text-[var(--text-primary)] uppercase tracking-wider text-xs">Film</th>
                  <th className="text-left py-3 px-4 font-bold text-[var(--text-primary)] uppercase tracking-wider text-xs">Year</th>
                  <th className="text-left py-3 px-4 font-bold text-[var(--text-primary)] uppercase tracking-wider text-xs">Director</th>
                  <th className="text-left py-3 px-4 font-bold text-[var(--text-primary)] uppercase tracking-wider text-xs">Morocco Locations</th>
                  <th className="text-left py-3 px-4 font-bold text-[var(--text-primary)] uppercase tracking-wider text-xs">Genre</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-light)]">
                {completeFilmography.map((film) => (
                  <tr key={`${film.title}-${film.year}`} className="hover:bg-[var(--color-primary)]/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-[var(--text-primary)]">{film.title}</td>
                    <td className="py-3 px-4 text-[var(--text-secondary)]">{film.year}</td>
                    <td className="py-3 px-4 text-[var(--text-secondary)]">{film.director}</td>
                    <td className="py-3 px-4 text-[var(--text-secondary)]">{film.locations}</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                        {film.genre}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BEHIND THE SCENES EXPERIENCES
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Sparkles className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Behind-the-Scenes Experiences
            </h2>
            <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto">
              Go beyond the screen. These immersive experiences let you step into the world of Moroccan filmmaking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {behindTheScenes.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <item.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SELF-GUIDED FILM TOURS
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Self-Guided Film Location Tours
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Five curated routes to visit the most iconic filming spots. Drive yourself or hire a local guide for the full behind-the-scenes experience.
          </p>
          <div className="space-y-6">
            {filmTours.map((tour) => (
              <div key={tour.name} className="card-featured p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl gradient-moroccan flex items-center justify-center">
                    <Route className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                      <h3 className="text-xl font-bold text-[var(--text-primary)]">{tour.name}</h3>
                      <span className="tag tag-primary">
                        <Clock className="w-3 h-3 mr-1" /> {tour.duration}
                      </span>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-3">{tour.description}</p>
                    <div className="mb-3">
                      <span className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">Films covered: </span>
                      <span className="text-xs text-[var(--text-muted)]">{tour.films}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tour.stops.map((stop) => (
                        <span key={stop} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-xs text-[var(--text-muted)] font-medium">
                          <MapPin className="w-3 h-3" /> {stop}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PROFESSIONAL FILM TOUR OPERATORS
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-secondary)]/10 mb-4">
              <Megaphone className="w-6 h-6 text-[var(--color-secondary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Professional Film Tour Operators
            </h2>
            <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto">
              For a deeper experience, these specialized operators offer guided tours led by film industry professionals with behind-the-scenes knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tourOperators.map((operator) => (
              <div key={operator.name} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{operator.name}</h3>
                <p className="text-xs text-[var(--color-primary)] font-semibold mb-3 flex items-center gap-1">
                  <Star className="w-3 h-3" /> {operator.specialty}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{operator.description}</p>
                <div className="flex flex-col gap-2 pt-3 border-t border-[var(--border-light)]">
                  <p className="text-xs text-[var(--text-muted)] flex items-center gap-1.5">
                    <Ticket className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    <strong>Prices:</strong> {operator.priceRange}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                    <strong>Languages:</strong> {operator.languages}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ATLAS STUDIOS VISITOR GUIDE
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Atlas Studios Visitor Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Everything you need to know for visiting Africa&apos;s largest film studio in Ouarzazate.
          </p>

          {/* Quick Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { icon: Clock, label: 'Hours', value: atlasStudiosGuide.hours },
              { icon: Ticket, label: 'Entry', value: atlasStudiosGuide.entry },
              { icon: Camera, label: 'Duration', value: atlasStudiosGuide.duration },
              { icon: MapPin, label: 'Location', value: atlasStudiosGuide.location },
            ].map((item) => (
              <div key={item.label} className="card-moroccan p-5 text-center">
                <item.icon className="w-5 h-5 text-[var(--color-primary)] mx-auto mb-2" />
                <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-1">{item.label}</h4>
                <p className="text-sm font-medium text-[var(--text-primary)]">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* What to See */}
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-[var(--color-primary)]" /> What to See
              </h3>
              <ul className="space-y-3">
                {atlasStudiosGuide.whatToSee.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <Star className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips */}
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-[var(--color-primary)]" /> Visitor Tips
              </h3>
              <ul className="space-y-3">
                {atlasStudiosGuide.tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CLA STUDIOS GUIDE
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            CLA Studios
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The second major studio complex in Ouarzazate, where Game of Thrones interiors and numerous other
            productions have been brought to life.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1548018560-c7196e66aca2?q=80&w=800"
                  alt="CLA Studios Ouarzazate - film production complex"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="tag tag-primary text-white bg-[var(--color-primary)] border-[var(--color-primary)]">
                    Game of Thrones Interiors
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: Clock, label: 'Hours', value: claStudiosGuide.hours },
                    { icon: Ticket, label: 'Entry', value: claStudiosGuide.entry },
                    { icon: Camera, label: 'Duration', value: claStudiosGuide.duration },
                    { icon: MapPin, label: 'Location', value: claStudiosGuide.location },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center gap-1.5 mb-1">
                        <item.icon className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                        <span className="text-xs font-bold text-[var(--text-muted)] uppercase">{item.label}</span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)]">{item.value}</p>
                    </div>
                  ))}
                </div>
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3 uppercase tracking-wider">Highlights</h3>
                <ul className="space-y-2">
                  {claStudiosGuide.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <Star className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          RECENT & STREAMING PRODUCTIONS
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Play className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Netflix, Amazon &amp; Streaming Productions
            </h2>
            <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto">
              The streaming era has brought a new wave of productions to Morocco, expanding its filmography beyond traditional Hollywood studios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentProductions.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10 mb-3">
                  <Play className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TIPS FOR VISITING FILMING LOCATIONS
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Compass className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Tips for Visiting Filming Locations
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Practical advice for planning your own film location tour across Morocco.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visitingTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <tip.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)] mb-1">{tip.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MOROCCO'S OWN FILM INDUSTRY
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Morocco&apos;s Own Film Industry
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Beyond Hollywood. Morocco has a thriving national cinema scene that is gaining international recognition at the world&apos;s most prestigious festivals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {moroccanCinema.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <div className="inline-flex p-2 rounded-lg bg-[var(--color-secondary)]/10 mb-3">
                  <Film className="w-5 h-5 text-[var(--color-secondary)]" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FILMING PERMITS & PRODUCTION
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Filming Permits &amp; Production
          </h2>
          <div className="card-moroccan p-8">
            <div className="prose-moroccan">
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Morocco&apos;s Centre Cinematographique Marocain (CCM) is the government body that oversees filming permits and production incentives. The country offers a streamlined permitting process that can approve shoots within 2-3 weeks, making it one of the fastest turnaround times in the region. The CCM has been instrumental in establishing Morocco as a top-tier filming destination since its founding.
                </p>
                <p>
                  The Moroccan government provides financial incentives including a 20% rebate on local spending for productions that spend above a threshold. Tax exemptions on imported equipment and reduced customs fees for temporary imports further reduce costs. The CCM also facilitates access to military and historical sites, including the ability to close streets and use government property for filming.
                </p>
                <p>
                  The country has a deep pool of experienced local crew members, from grips and gaffers to production coordinators and location scouts. Many have worked on dozens of international productions and speak multiple languages including Arabic, French, English, and Spanish. This established infrastructure means productions can scale up quickly with minimal imported crew, reducing costs and logistics.
                </p>
                <p>
                  For tourists, the film industry&apos;s presence adds a unique dimension to travel. Visiting Atlas Studios, walking through locations you have seen on screen, and understanding the industry that has shaped global perceptions of Morocco adds cultural depth that few destinations can match. The ongoing presence of film crews in locations like Ouarzazate means you may even stumble upon an active production during your visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <Clapperboard className="w-10 h-10 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Explore Morocco&apos;s Screen Destinations
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Plan your own film location tour. Visit the real-world settings of your favorite movies and shows across the Hollywood of Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Destinations
            </Link>
            <Link
              href="/road-trips"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Route className="w-4 h-4" /> Road Trip Routes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

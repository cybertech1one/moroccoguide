export interface AttractionData {
  slug: string;
  name: string;
  citySlug: string;
  cityName: string;
  type: 'monument' | 'museum' | 'nature' | 'market' | 'religious' | 'ruins' | 'garden' | 'beach';
  description: string;
  longDescription: string;
  entranceFeeMad: number | null;
  openingHours: string;
  durationHours: number;
  bestTime: string;
  accessibility: string;
  isUnesco: boolean;
  rating: number;
  reviewCount: number;
  image: string;
  galleryImages: string[];
  latitude: number;
  longitude: number;
  tips: string[];
}

export const ATTRACTION_TYPES = [
  { id: 'monument', label: 'Monument' },
  { id: 'museum', label: 'Museum' },
  { id: 'nature', label: 'Nature' },
  { id: 'market', label: 'Market' },
  { id: 'religious', label: 'Religious' },
  { id: 'ruins', label: 'Ruins' },
  { id: 'garden', label: 'Garden' },
  { id: 'beach', label: 'Beach' },
] as const;

export const attractions: AttractionData[] = [
  {
    slug: 'jemaa-el-fnaa',
    name: 'Jemaa el-Fnaa',
    citySlug: 'marrakech',
    cityName: 'Marrakech',
    type: 'market',
    description: 'The vibrant heart of Marrakech and a UNESCO Masterpiece of the Oral and Intangible Heritage of Humanity.',
    longDescription: `Jemaa el-Fnaa is the beating heart of Marrakech and one of the most famous squares in the world. Recognized by UNESCO as a Masterpiece of the Oral and Intangible Heritage of Humanity in 2001, this vast open space has been the center of Marrakech's social life since the city's founding in the 11th century.

By day, the square hosts orange juice sellers with their colorful carts, snake charmers (though this practice is increasingly discouraged), henna artists, and traditional herbalists with their mysterious potions laid out on blankets. As the sun begins to set, the square undergoes a magical transformation. Row upon row of food stalls materialize as if from thin air, filling the evening air with the fragrant smoke of grilling meats, the sizzle of fresh seafood, and the aroma of spices.

By night, the entertainment reaches its peak. Storytellers draw crowds with tales told in dramatic Moroccan Arabic, musicians play Gnawa rhythms, acrobats perform daring feats, and fortune tellers offer to reveal your destiny. The experience is overwhelming, intoxicating, and utterly unforgettable. From the surrounding cafe terraces, the panoramic view of this nightly spectacle, with the illuminated Koutoubia Mosque minaret rising in the background, is one of Africa's most iconic sights.

The square's name is often translated as "Assembly of the Dead," possibly referring to public executions that once took place here, though scholars debate this interpretation. What is beyond debate is that Jemaa el-Fnaa is a living testament to the rich oral and performative traditions of Morocco, one that continues to evolve while maintaining its essential character.`,
    entranceFeeMad: null,
    openingHours: '24 hours, most activity 5 PM - midnight',
    durationHours: 3,
    bestTime: 'Early evening for the full transformation experience',
    accessibility: 'Fully accessible, ground-level open square',
    isUnesco: true,
    rating: 4.7,
    reviewCount: 18420,
    image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1509310228460-e0266a1e0d7c?w=800&q=80',
      'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80',
      'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80',
    ],
    latitude: 31.6260,
    longitude: -7.9891,
    tips: [
      'Visit at sunset for the best atmosphere as the food stalls set up',
      'Negotiate prices before taking any photos of performers',
      'Watch your belongings closely in the crowded evening hours',
      'Head to Cafe de France or Le Grand Balcon for panoramic views',
      'Try the fresh-squeezed orange juice, it is the best deal in the square',
    ],
  },
  {
    slug: 'hassan-ii-mosque',
    name: 'Hassan II Mosque',
    citySlug: 'casablanca',
    cityName: 'Casablanca',
    type: 'religious',
    description: 'One of the largest mosques in the world, with the tallest minaret on Earth, built partially over the Atlantic Ocean.',
    longDescription: `The Hassan II Mosque in Casablanca is one of the most extraordinary religious buildings in the world. Completed in 1993 after seven years of construction involving 10,000 artisans, this architectural marvel stands partially over the Atlantic Ocean, fulfilling King Hassan II's vision of a prayer hall with a glass floor through which worshippers could pray directly above the sea.

The mosque's minaret rises 210 meters, making it the tallest religious structure on Earth, and is topped with a laser that shines toward Mecca. The interior is equally breathtaking: the retractable roof can open to reveal the sky, the floor is heated, and every surface is adorned with handcrafted zellige tilework, carved plaster, and painted cedar ceilings. The prayer hall can accommodate 25,000 worshippers, with space for another 80,000 in the surrounding courtyards.

The craftsmanship is extraordinary. Marble was brought from Agadir, cedar from the Middle Atlas, and granite from Tafraoute. Over 50 million zellige tiles were hand-cut and assembled by master craftsmen using techniques that have been passed down through generations. The hammam (bathhouse) in the basement complex is one of the most beautiful in Morocco.

The Hassan II Mosque is one of only two mosques in Morocco open to non-Muslim visitors, making it an essential stop for anyone visiting Casablanca. Guided tours, available in multiple languages, provide insight into the architectural techniques, religious symbolism, and cultural significance of this modern masterpiece.`,
    entranceFeeMad: 130,
    openingHours: 'Guided tours: 9am, 10am, 11am, 2pm (Sat-Thu)',
    durationHours: 1.5,
    bestTime: 'Morning for the best light and smaller crowds',
    accessibility: 'Wheelchair accessible with elevators',
    isUnesco: false,
    rating: 4.8,
    reviewCount: 15630,
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1577147443647-81856d5d2d39?w=800&q=80',
    ],
    latitude: 33.6086,
    longitude: -7.6322,
    tips: [
      'Book guided tours in advance during peak season',
      'Dress modestly; women should cover shoulders and knees',
      'The afternoon tour offers beautiful light through the glass floor',
      'Photography is allowed during tours',
      'Visit at sunset for stunning exterior photos against the ocean',
    ],
  },
  {
    slug: 'bahia-palace',
    name: 'Bahia Palace',
    citySlug: 'marrakech',
    cityName: 'Marrakech',
    type: 'monument',
    description: 'A stunning 19th-century palace showcasing the finest of Moroccan Islamic architecture and garden design.',
    longDescription: `The Bahia Palace is one of Marrakech's most magnificent architectural achievements. Built in the late 19th century by Si Moussa, grand vizier of Sultan Hassan I, and later expanded by his son Ba Ahmed, the palace was intended to be the greatest palace of its time. Its name means "Palace of the Beautiful" or "Palace of the Brilliant."

The palace covers 8,000 square meters and features 150 rooms arranged around a series of gardens, courtyards, and riads. The craftsmanship on display is extraordinary: intricate zellige tilework covers the lower walls, carved stucco adorns the upper sections, and painted cedar ceilings crown each room with geometric patterns of stunning complexity. The courtyards feature marble floors, fountains, and lush gardens planted with orange, banana, and cypress trees.`,
    entranceFeeMad: 70,
    openingHours: '9am - 5pm daily',
    durationHours: 1.5,
    bestTime: 'Early morning to avoid tour groups',
    accessibility: 'Partially accessible; some areas have steps',
    isUnesco: false,
    rating: 4.5,
    reviewCount: 8920,
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80',
    galleryImages: [],
    latitude: 31.6218,
    longitude: -7.9826,
    tips: [
      'Arrive when the doors open at 9am to have the courtyards to yourself',
      'Look up constantly - the painted cedar ceilings are extraordinary',
      'The large courtyard garden is perfect for photography',
      'Allow 1-2 hours for a thorough visit',
    ],
  },
  {
    slug: 'majorelle-garden',
    name: 'Majorelle Garden',
    citySlug: 'marrakech',
    cityName: 'Marrakech',
    type: 'garden',
    description: 'A botanical oasis of cobalt blue buildings and exotic plants, once owned by Yves Saint Laurent.',
    longDescription: `Majorelle Garden is Marrakech's most famous botanical garden, a tranquil oasis of cobalt blue buildings, exotic plants, and flowing water in the heart of the bustling Gueliz district. Created by French painter Jacques Majorelle over 40 years beginning in 1923, the garden was rescued from developers by fashion designer Yves Saint Laurent and Pierre Berge in 1980.

The garden's signature element is the vivid cobalt blue paint, now known as "Majorelle Blue," that covers the Art Deco studio building, planters, and architectural elements. Against this electric blue backdrop, the collection of over 300 plant species from five continents creates a spectacular palette of greens, from towering palms and bamboo to banks of bougainvillea and water lilies.

The garden also houses the Berber Museum, which showcases a stunning collection of North African textiles, jewelry, pottery, and weapons, providing insight into the rich cultural traditions of Morocco's indigenous Berber people.`,
    entranceFeeMad: 150,
    openingHours: '8am - 6:30pm (summer), 8am - 5:30pm (winter)',
    durationHours: 1.5,
    bestTime: 'Opening time for fewer crowds and softer light',
    accessibility: 'Mostly accessible with paved paths',
    isUnesco: false,
    rating: 4.6,
    reviewCount: 12340,
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80',
    galleryImages: [],
    latitude: 31.6417,
    longitude: -8.0032,
    tips: [
      'Buy tickets online to skip the often long queues',
      'Visit early morning or late afternoon for the best photos',
      'The Berber Museum inside is well worth the extra entrance fee',
      'The YSL Museum next door can be combined in one visit',
    ],
  },
  {
    slug: 'koutoubia-mosque',
    name: 'Koutoubia Mosque',
    citySlug: 'marrakech',
    cityName: 'Marrakech',
    type: 'religious',
    description: 'The largest mosque in Marrakech with its iconic 77-meter minaret that has dominated the skyline since the 12th century.',
    longDescription: `The Koutoubia Mosque is Marrakech's most famous landmark and the largest mosque in the city. Its magnificent 77-meter minaret, built in the 12th century during the Almohad dynasty, has served as the architectural prototype for the Giralda in Seville and the Hassan Tower in Rabat. The name "Koutoubia" derives from the Arabic word for bookseller, as the mosque was once surrounded by a large book market.

While non-Muslims cannot enter the mosque, its exterior and the surrounding gardens are a central feature of Marrakech's landscape. The minaret is visible from virtually anywhere in the city and serves as a constant orientation point for navigating the medina. The gardens surrounding the mosque, filled with orange trees and roses, are a popular gathering spot for locals, especially at sunset when the minaret is bathed in golden light.`,
    entranceFeeMad: null,
    openingHours: 'Exterior and gardens accessible 24/7; interior closed to non-Muslims',
    durationHours: 0.5,
    bestTime: 'Sunset for the golden light on the minaret',
    accessibility: 'Exterior gardens fully accessible',
    isUnesco: false,
    rating: 4.5,
    reviewCount: 9870,
    image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&q=80',
    galleryImages: [],
    latitude: 31.6237,
    longitude: -7.9936,
    tips: [
      'Best viewed from the Jemaa el-Fnaa side at sunset',
      'The gardens are a perfect picnic spot',
      'The minaret is beautifully lit at night',
    ],
  },
  {
    slug: 'ben-youssef-madrasa',
    name: 'Ben Youssef Madrasa',
    citySlug: 'marrakech',
    cityName: 'Marrakech',
    type: 'monument',
    description: 'A former Islamic college featuring the most ornate architecture in Marrakech, with stunning zellige and carved stucco.',
    longDescription: `The Ben Youssef Madrasa is an Islamic college in Marrakech that was once the largest in North Africa, housing up to 900 students who came from across the Muslim world to study theology, law, and science. Founded in the 14th century and rebuilt in the 16th century by the Saadian dynasty, the madrasa is a masterpiece of Moroccan-Andalusian architecture.

The central courtyard, with its marble-floored ablutions pool, is surrounded by galleries adorned with some of the most intricate zellige tilework, carved stucco, and cedar woodwork in all of Morocco. Every surface is covered with geometric patterns, calligraphy, and arabesque designs of mind-boggling complexity.`,
    entranceFeeMad: 50,
    openingHours: '9am - 6pm daily',
    durationHours: 1,
    bestTime: 'Mid-morning for the best light in the courtyard',
    accessibility: 'Ground floor accessible; upper galleries via stairs only',
    isUnesco: false,
    rating: 4.7,
    reviewCount: 7650,
    image: 'https://images.unsplash.com/photo-1509310228460-e0266a1e0d7c?w=800&q=80',
    galleryImages: [],
    latitude: 31.6317,
    longitude: -7.9863,
    tips: [
      'Visit in combination with the nearby Museum of Marrakech',
      'The student cells on the upper floors offer intimate views of the courtyard',
      'Photography is excellent from the upper galleries',
    ],
  },
  {
    slug: 'saadian-tombs',
    name: 'Saadian Tombs',
    citySlug: 'marrakech',
    cityName: 'Marrakech',
    type: 'monument',
    description: 'Exquisitely decorated royal tombs from the 16th century, rediscovered in 1917 after being sealed for centuries.',
    longDescription: `The Saadian Tombs are a necropolis in Marrakech dating to the time of Sultan Ahmad al-Mansur (1578-1603). Sealed by subsequent rulers and forgotten for centuries, they were rediscovered by a French aerial survey in 1917 and have since been restored and opened to the public.

The main mausoleum, the Hall of Twelve Columns, is a breathtaking space of Italian Carrara marble, zellige tilework, and carved cedar, housing the tomb of Sultan Ahmad al-Mansur and his family. The attention to detail is extraordinary, with every column, arch, and dome decorated with geometric patterns that seem to shimmer in the filtered light.`,
    entranceFeeMad: 70,
    openingHours: '9am - 5pm daily',
    durationHours: 0.75,
    bestTime: 'Early morning or late afternoon to avoid queues',
    accessibility: 'Limited; narrow passages and steps',
    isUnesco: false,
    rating: 4.4,
    reviewCount: 6540,
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80',
    galleryImages: [],
    latitude: 31.6172,
    longitude: -7.9882,
    tips: [
      'The entrance is through a narrow passage beside the Kasbah Mosque',
      'Visit first thing in the morning to beat the crowds',
      'The garden area around the tombs is peaceful and often overlooked',
    ],
  },
  {
    slug: 'marrakech-souks',
    name: 'Marrakech Souks',
    citySlug: 'marrakech',
    cityName: 'Marrakech',
    type: 'market',
    description: 'The largest traditional market in Morocco, a labyrinth of covered alleyways selling everything from spices to carpets.',
    longDescription: `The Marrakech souks are the largest and most vibrant traditional markets in Morocco, a sprawling labyrinth of covered alleyways, open squares, and hidden courtyards that extend north from Jemaa el-Fnaa deep into the medina. Organized by trade, each section has its own character: the fragrant spice souk, the colorful fabric souk, the clanging metalworkers' souk, and the prestigious carpet souk, among many others.

Shopping in the souks is an immersive experience that engages all the senses. The art of haggling is expected and enjoyed by both buyer and seller. A good rule of thumb is to start at about one-third of the asking price and negotiate from there. Beyond shopping, the souks are a window into centuries-old craft traditions that continue to thrive in Marrakech.`,
    entranceFeeMad: null,
    openingHours: '9am - 8pm daily, many shops closed Friday afternoon',
    durationHours: 3,
    bestTime: 'Morning for serious shopping, evening for atmosphere',
    accessibility: 'Narrow passages; some areas difficult for wheelchairs',
    isUnesco: false,
    rating: 4.6,
    reviewCount: 11200,
    image: 'https://images.unsplash.com/photo-1509310228460-e0266a1e0d7c?w=800&q=80',
    galleryImages: [],
    latitude: 31.6310,
    longitude: -7.9880,
    tips: [
      'Negotiate everything; never accept the first price',
      'Keep a mental note of landmarks to avoid getting lost',
      'The deeper into the medina, the more authentic (and cheaper) the goods',
      'Carry small bills for easier transactions',
    ],
  },
  {
    slug: 'el-badi-palace',
    name: 'El Badi Palace',
    citySlug: 'marrakech',
    cityName: 'Marrakech',
    type: 'ruins',
    description: 'The atmospheric ruins of a once-magnificent 16th-century Saadian palace, with nesting storks and underground passages.',
    longDescription: `El Badi Palace, whose name means "The Incomparable," was built in the late 16th century by Saadian Sultan Ahmad al-Mansur to celebrate his victory over the Portuguese at the Battle of the Three Kings. Funded by vast amounts of Portuguese ransom gold, the palace was reportedly covered in gold, onyx, and Italian marble, with a massive central courtyard featuring a sunken garden and a 90-meter-long reflecting pool.

Today, only the dramatic ruins remain, the splendor stripped away by later rulers who pillaged its treasures. Yet even in ruins, El Badi is magnificent. The scale is breathtaking: massive walls of rammed earth tower overhead, home to nesting storks that add to the atmospheric quality. Underground passages, dungeons, and a small museum of historical artifacts can be explored.`,
    entranceFeeMad: 70,
    openingHours: '9am - 5pm daily',
    durationHours: 1,
    bestTime: 'Late afternoon for dramatic shadows and golden light',
    accessibility: 'Partially accessible; uneven ground and stairs',
    isUnesco: false,
    rating: 4.3,
    reviewCount: 5430,
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80',
    galleryImages: [],
    latitude: 31.6190,
    longitude: -7.9852,
    tips: [
      'Climb to the rampart walls for panoramic views of the medina',
      'Look for the nesting storks on top of the walls',
      'Combine with the nearby Saadian Tombs',
    ],
  },
  {
    slug: 'dar-si-said-museum',
    name: 'Dar Si Said Museum',
    citySlug: 'marrakech',
    cityName: 'Marrakech',
    type: 'museum',
    description: 'A beautiful 19th-century palace housing an outstanding collection of Moroccan arts and crafts spanning centuries.',
    longDescription: `The Dar Si Said Museum, officially the National Museum of Weaving and Carpets, is housed in a stunning 19th-century palace built by Si Said, the brother of the grand vizier Ba Ahmed who built the nearby Bahia Palace. The palace itself is a masterwork, with elegant courtyards, fountains, and rooms decorated with carved cedar, zellige tilework, and painted plaster.

The collection focuses on Moroccan decorative arts, with outstanding displays of Berber jewelry, ceramics, leatherwork, textiles, and woodwork from across the country. The carpet collection is particularly impressive, showcasing the distinct weaving traditions of different regions and tribes.`,
    entranceFeeMad: 30,
    openingHours: '9am - 12pm, 3pm - 6pm (Wed-Mon)',
    durationHours: 1,
    bestTime: 'Weekday mornings for a quiet visit',
    accessibility: 'Ground floor mostly accessible; upper floors via stairs',
    isUnesco: false,
    rating: 4.3,
    reviewCount: 3210,
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80',
    galleryImages: [],
    latitude: 31.6216,
    longitude: -7.9848,
    tips: [
      'One of the less crowded museums; a peaceful escape from the souks',
      'The building itself is as impressive as the collection',
      'Ask about temporary exhibitions which change regularly',
    ],
  },
  {
    slug: 'chouara-tannery',
    name: 'Chouara Tannery',
    citySlug: 'fes',
    cityName: 'Fes',
    type: 'market',
    description: 'The oldest and largest tannery in Fes, where leather has been dyed using medieval techniques for over 1,000 years.',
    longDescription: `The Chouara Tannery is the largest and most visited of the three tanneries in Fes, and one of the most iconic sights in all of Morocco. Operating continuously since at least the 11th century, the tannery uses traditional methods that have remained essentially unchanged for a millennium.

Hundreds of stone vessels filled with natural dyes, including saffron (yellow), poppy (red), indigo (blue), mint (green), and cedar (brown), create a striking mosaic of color when viewed from above. Workers stand waist-deep in the vessels, processing and dying animal hides using techniques passed from father to son for generations. The process involves soaking the hides in a mixture of cow urine, quicklime, and pigeon droppings to soften them, before they are transferred to the dyeing vats.`,
    entranceFeeMad: null,
    openingHours: 'Best viewed from surrounding leather shops 10am - 5pm',
    durationHours: 0.75,
    bestTime: 'Late morning when the sun illuminates the dye vats',
    accessibility: 'Viewed from terraces; stairs required',
    isUnesco: false,
    rating: 4.5,
    reviewCount: 8760,
    image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80',
    galleryImages: [],
    latitude: 34.0643,
    longitude: -4.9734,
    tips: [
      'Accept the mint sprig offered at the entrance; you will need it for the smell',
      'The surrounding leather shops offer free terrace views but expect sales pressure',
      'Morning light provides the best photography conditions',
    ],
  },
  {
    slug: 'al-qarawiyyin',
    name: 'Al-Qarawiyyin University',
    citySlug: 'fes',
    cityName: 'Fes',
    type: 'religious',
    description: 'The oldest continuously operating university in the world, founded in 859 AD, a masterpiece of Moorish architecture.',
    longDescription: `Al-Qarawiyyin is the oldest continuously operating university in the world, according to UNESCO and the Guinness World Records. Founded in 859 AD by Fatima al-Fihri, a woman from the wealthy Fihrid dynasty, it began as a mosque and quickly evolved into one of the greatest centers of learning in the medieval Islamic world.

Over the centuries, Al-Qarawiyyin attracted scholars from across the Muslim world and even influenced European thought. The Jewish philosopher Maimonides and the geographer Leo Africanus are among its most famous alumni. The university's library, recently restored and reopened, contains some of the world's oldest manuscripts, including a 9th-century Quran written on camel skin.

The mosque and university complex is an architectural treasure, with a prayer hall that can accommodate 20,000 worshippers. While non-Muslims cannot enter the prayer hall, the recent renovation has made parts of the library and courtyard visible to visitors.`,
    entranceFeeMad: null,
    openingHours: 'Exterior viewable daily; interior largely restricted to Muslims',
    durationHours: 0.5,
    bestTime: 'Weekday mornings',
    accessibility: 'Limited access for non-Muslims',
    isUnesco: true,
    rating: 4.6,
    reviewCount: 5430,
    image: 'https://images.unsplash.com/photo-1545042746-ec2e47e2603e?w=800&q=80',
    galleryImages: [],
    latitude: 34.0641,
    longitude: -4.9735,
    tips: [
      'Non-Muslims can peek through the doors when they are open',
      'Combine with a visit to the nearby Chouara Tannery',
      'The surrounding streets are excellent for getting lost and discovering hidden gems',
    ],
  },
  {
    slug: 'volubilis',
    name: 'Volubilis',
    citySlug: 'meknes',
    cityName: 'Meknes',
    type: 'ruins',
    description: 'The best-preserved Roman ruins in North Africa, with stunning mosaics and a dramatic hillside setting.',
    longDescription: `Volubilis is the best-preserved Roman archaeological site in Morocco and one of the finest in all of North Africa. Located near Meknes and the holy town of Moulay Idriss, this UNESCO World Heritage Site was once a prosperous Roman city at the southwestern edge of the empire.

The ruins span a large area and include remarkably well-preserved mosaics depicting mythological scenes, a triumphal arch, a basilica, and the foundations of extensive residential quarters. The House of Orpheus and the House of Venus contain some of the finest in-situ mosaics you will find anywhere in the Roman world, with scenes of Orpheus charming wild animals with his lyre and Venus bathing with nymphs.`,
    entranceFeeMad: 70,
    openingHours: '8:30am - sunset daily',
    durationHours: 2,
    bestTime: 'Early morning or late afternoon for best light and fewer crowds',
    accessibility: 'Mostly accessible; uneven ancient roads',
    isUnesco: true,
    rating: 4.6,
    reviewCount: 6780,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
    galleryImages: [],
    latitude: 34.0725,
    longitude: -5.5548,
    tips: [
      'Hire a local guide at the entrance for historical context',
      'Bring water and sun protection; there is little shade',
      'The Tangier Gate and Triumphal Arch are the most photogenic structures',
      'Combine with a visit to nearby Moulay Idriss',
    ],
  },
  {
    slug: 'ait-benhaddou',
    name: 'Ait Benhaddou',
    citySlug: 'ouarzazate',
    cityName: 'Ouarzazate',
    type: 'monument',
    description: 'A UNESCO-listed fortified village of striking kasbahs, one of the most famous filming locations in the world.',
    longDescription: `Ait Benhaddou is one of the most spectacular sights in Morocco. This UNESCO World Heritage fortified village (ksar) consists of a collection of earthen buildings surrounded by high defensive walls, rising dramatically above a river valley against a backdrop of stark, eroded mountains.

The kasbahs of Ait Benhaddou, built from a mixture of straw and red pise (rammed earth), exemplify traditional Moroccan pre-Saharan construction techniques. The site has served as a filming location for numerous Hollywood productions including Gladiator, Lawrence of Arabia, Game of Thrones, and The Mummy, cementing its status as an icon of cinematic Morocco.`,
    entranceFeeMad: null,
    openingHours: 'Open access, sunrise to sunset',
    durationHours: 2,
    bestTime: 'Morning light creates the most dramatic shadows',
    accessibility: 'Challenging; steep unpaved paths to the top',
    isUnesco: true,
    rating: 4.7,
    reviewCount: 9120,
    image: 'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=800&q=80',
    galleryImages: [],
    latitude: 31.0471,
    longitude: -7.1296,
    tips: [
      'Cross the river on the sandbag bridge for the classic approach',
      'Climb to the top of the granary for 360-degree views',
      'Visit in the morning before tour buses arrive',
      'Some families still live here and offer mint tea on their terraces',
    ],
  },
  {
    slug: 'todra-gorge',
    name: 'Todra Gorge',
    citySlug: 'tinghir',
    cityName: 'Tinghir',
    type: 'nature',
    description: 'A dramatic canyon with 300-meter limestone walls narrowing to just 10 meters, a paradise for hikers and rock climbers.',
    longDescription: `The Todra Gorge is one of Morocco's most spectacular natural wonders. Located near the town of Tinghir, the gorge is a massive fault through the eastern end of the High Atlas Mountains, with sheer limestone and sandstone walls rising up to 300 meters on either side. At its narrowest point, the canyon is just 10 meters wide, creating a dramatic natural corridor that has been carved by the Todra River over millions of years.

The gorge is a world-renowned destination for rock climbing, with hundreds of bolted routes ranging from beginner to expert level. Even non-climbers are awed by the scale of the canyon walls and the beauty of the surrounding palm-filled valley. A paved road runs through the bottom of the gorge, making it easily accessible.`,
    entranceFeeMad: null,
    openingHours: 'Open access, daylight hours recommended',
    durationHours: 2,
    bestTime: 'Morning when sunlight reaches the gorge floor',
    accessibility: 'Road accessible; hiking trails require fitness',
    isUnesco: false,
    rating: 4.6,
    reviewCount: 5430,
    image: 'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=800&q=80',
    galleryImages: [],
    latitude: 31.5889,
    longitude: -5.5917,
    tips: [
      'Walk beyond the narrow section for more solitude and great views',
      'The cafes at the narrowest point offer a surreal dining experience',
      'Rock climbing guides can be hired in Tinghir',
      'Morning is best as the gorge gets shady in the afternoon',
    ],
  },
  {
    slug: 'erg-chebbi',
    name: 'Erg Chebbi Dunes',
    citySlug: 'merzouga',
    cityName: 'Merzouga',
    type: 'nature',
    description: 'Morocco\'s tallest sand dunes reaching 150 meters, offering quintessential Sahara experiences of camel treks and desert camps.',
    longDescription: `Erg Chebbi is Morocco's premier Saharan sand sea, a vast expanse of towering orange-gold dunes stretching about 22 kilometers from north to south and 5 kilometers wide near the village of Merzouga. The tallest dunes reach approximately 150 meters, creating a landscape of surreal beauty that epitomizes the romantic image of the Sahara.

The classic Erg Chebbi experience involves a sunset camel trek into the heart of the dunes, followed by dinner and overnight stay in a traditional Berber desert camp. As darkness falls, the absence of light pollution reveals a canopy of stars of breathtaking clarity. Dawn brings the spectacle of sunrise over the dunes, with constantly shifting patterns of light and shadow.`,
    entranceFeeMad: null,
    openingHours: 'Open access; camel treks depart late afternoon',
    durationHours: 12,
    bestTime: 'October to April, avoiding extreme summer heat',
    accessibility: 'Camel riding required for deep dune access; challenging terrain',
    isUnesco: false,
    rating: 4.9,
    reviewCount: 7890,
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80',
    galleryImages: [],
    latitude: 31.1506,
    longitude: -3.9650,
    tips: [
      'Book a reputable desert camp in advance, especially during peak season',
      'Bring warm clothing for cold desert nights',
      'A headlamp is essential for navigating camp at night',
      'Sandboarding can be arranged through most camps',
    ],
  },
  {
    slug: 'hassan-tower',
    name: 'Hassan Tower',
    citySlug: 'rabat',
    cityName: 'Rabat',
    type: 'monument',
    description: 'The iconic unfinished minaret of a 12th-century mosque, standing alongside the Mausoleum of Mohammed V.',
    longDescription: `The Hassan Tower is one of Rabat's most iconic landmarks. This unfinished minaret of a massive mosque begun by Sultan Yacoub al-Mansour in 1195 was intended to be the largest in the world, but construction stopped when the sultan died in 1199. The tower stands 44 meters tall, roughly half its intended height, surrounded by 200 columns that mark where the mosque's prayer hall would have been.

Adjacent to the tower is the Mausoleum of Mohammed V, a stunning modern masterpiece of Alaouite architecture completed in 1971. The mausoleum houses the tombs of King Mohammed V and his sons, King Hassan II and Prince Abdallah. Its white marble exterior and green-tiled roof contrast beautifully with the ancient sandstone of the Hassan Tower.`,
    entranceFeeMad: null,
    openingHours: '9am - 6pm daily',
    durationHours: 1,
    bestTime: 'Late afternoon for warm light on the sandstone',
    accessibility: 'Mostly accessible; flat ground around the monuments',
    isUnesco: true,
    rating: 4.5,
    reviewCount: 6120,
    image: 'https://images.unsplash.com/photo-1570804485046-99ca21dbdc43?w=800&q=80',
    galleryImages: [],
    latitude: 34.0244,
    longitude: -6.8237,
    tips: [
      'The Royal Guards in white uniforms make great photo subjects',
      'Visit both the tower and the mausoleum in one trip',
      'Sunset is particularly beautiful here',
    ],
  },
  {
    slug: 'kasbah-udayas',
    name: 'Kasbah of the Udayas',
    citySlug: 'rabat',
    cityName: 'Rabat',
    type: 'monument',
    description: 'A picturesque 12th-century fortress overlooking the Bou Regreg river, with blue-and-white painted streets and Andalusian gardens.',
    longDescription: `The Kasbah of the Udayas is Rabat's most charming historic quarter, a fortified kasbah perched on a cliff at the mouth of the Bou Regreg river where it meets the Atlantic Ocean. Built by the Almohad dynasty in the 12th century and later inhabited by Andalusian refugees, the kasbah features narrow streets painted in the distinctive blue and white that gives it a serene, almost Mediterranean atmosphere.

The Andalusian Garden inside the kasbah walls is a tranquil oasis of fragrant flowers, orange trees, and a central fountain, designed in the formal Moorish garden style. The Oudayas Museum, housed in a former palace, displays Moroccan arts and crafts. But the greatest pleasure is simply wandering the quiet lanes, discovering hidden doorways, and ending up at the viewpoint overlooking the river and the Atlantic.`,
    entranceFeeMad: null,
    openingHours: 'Open access to the kasbah streets; museum hours vary',
    durationHours: 1.5,
    bestTime: 'Morning light on the blue-and-white walls',
    accessibility: 'Challenging; steep, narrow cobblestone streets',
    isUnesco: true,
    rating: 4.6,
    reviewCount: 4890,
    image: 'https://images.unsplash.com/photo-1570804485046-99ca21dbdc43?w=800&q=80',
    galleryImages: [],
    latitude: 34.0327,
    longitude: -6.8374,
    tips: [
      'Enter through the magnificent Bab Oudaia gate',
      'The cafe at the viewpoint serves excellent mint tea',
      'Best combined with a walk along the river to the Sale side',
    ],
  },
  {
    slug: 'caves-of-hercules',
    name: 'Caves of Hercules',
    citySlug: 'tangier',
    cityName: 'Tangier',
    type: 'nature',
    description: 'Legendary sea caves near Tangier with an opening shaped like the map of Africa, steeped in Greek mythology.',
    longDescription: `The Caves of Hercules are a remarkable natural formation located about 14 kilometers west of Tangier, near Cap Spartel where the Atlantic Ocean meets the Mediterranean Sea. According to Greek mythology, Hercules rested in these caves during his Twelve Labours, specifically the eleventh labour of obtaining the golden apples from the Garden of the Hesperides.

The caves' most famous feature is the sea-facing opening, which from inside, appears to be shaped like the outline of the African continent, though some argue it resembles it only in reverse. The caves extend deep into the rock and were used for millennia for stone quarrying, particularly for millstones. The interior features both natural chambers carved by the sea and human-made spaces from the quarrying activities.`,
    entranceFeeMad: 60,
    openingHours: '9am - 6pm daily',
    durationHours: 0.75,
    bestTime: 'Low tide for better access, afternoon for the Africa-shaped light',
    accessibility: 'Steps required; not wheelchair accessible',
    isUnesco: false,
    rating: 4.2,
    reviewCount: 3890,
    image: 'https://images.unsplash.com/photo-1553522991-71439aa3bf8c?w=800&q=80',
    galleryImages: [],
    latitude: 35.7604,
    longitude: -5.9383,
    tips: [
      'Combine with a visit to nearby Cap Spartel lighthouse',
      'The Africa-shaped opening is best photographed in the afternoon',
      'The area around the caves has several seafood restaurants with ocean views',
    ],
  },
  {
    slug: 'chefchaouen-medina',
    name: 'Chefchaouen Blue Medina',
    citySlug: 'chefchaouen',
    cityName: 'Chefchaouen',
    type: 'monument',
    description: 'The iconic blue-painted old town of Chefchaouen, one of the most photographed locations in all of Morocco.',
    longDescription: `The medina of Chefchaouen is one of the most visually stunning urban landscapes in the world. Every building, doorway, step, and alleyway is painted in varying shades of blue, from pale powder blue to vivid cobalt and deep indigo, creating an ethereal atmosphere that has made it one of the most photographed places in Morocco.

The tradition of painting the town blue is believed to have been introduced by Jewish refugees who arrived in the 1930s, for whom blue represented the sky and served as a reminder to lead a spiritual life. The practice continued and expanded until it became Chefchaouen's defining characteristic. Today, residents maintain and repaint the blue facades regularly, and the tradition has become a source of civic pride.`,
    entranceFeeMad: null,
    openingHours: 'Open access 24/7',
    durationHours: 3,
    bestTime: 'Early morning before 10am for empty streets and soft light',
    accessibility: 'Challenging; steep, narrow, uneven streets',
    isUnesco: false,
    rating: 4.8,
    reviewCount: 9560,
    image: 'https://images.unsplash.com/photo-1553522991-71439aa3bf8c?w=800&q=80',
    galleryImages: [],
    latitude: 35.1718,
    longitude: -5.2636,
    tips: [
      'Wake up early; the medina before 10am is magical',
      'The Spanish Mosque hike above town offers the best panoramic views',
      'Bring comfortable shoes for the many steep hills',
      'The local goat cheese is a specialty not to be missed',
    ],
  },
  {
    slug: 'el-jadida-cistern',
    name: 'Portuguese Cistern',
    citySlug: 'el-jadida',
    cityName: 'El Jadida',
    type: 'monument',
    description: 'A hauntingly beautiful underground chamber with Gothic arches reflected in a shallow pool of water.',
    longDescription: `The Portuguese Cistern in El Jadida is one of Morocco's most atmospherically beautiful historical sites. Built by the Portuguese in the early 16th century, this underground chamber was originally used as an armory and later converted to a cistern for water storage.

The space is defined by 25 Gothic stone pillars and arches supporting a vaulted ceiling, with a shallow layer of water on the floor that creates perfect reflections of the architecture above. A single skylight in the center allows a shaft of light to penetrate the gloom, creating an almost spiritual atmosphere that has inspired photographers, filmmakers, and artists for decades. Orson Welles featured it memorably in his 1952 film Othello.`,
    entranceFeeMad: 30,
    openingHours: '8:30am - 6pm daily',
    durationHours: 0.5,
    bestTime: 'Mid-morning when the light streams through the skylight',
    accessibility: 'Steps required to enter the underground chamber',
    isUnesco: true,
    rating: 4.5,
    reviewCount: 3120,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
    galleryImages: [],
    latitude: 33.2561,
    longitude: -8.5021,
    tips: [
      'The reflection in the water creates stunning photographs',
      'Visit when the sun is high for the best light shaft through the skylight',
      'Combine with a walk on the Portuguese City ramparts',
    ],
  },
  {
    slug: 'essaouira-ramparts',
    name: 'Essaouira Ramparts & Medina',
    citySlug: 'essaouira',
    cityName: 'Essaouira',
    type: 'monument',
    description: 'UNESCO-listed 18th-century Portuguese fortifications with dramatic ocean views and a photogenic fishing harbor.',
    longDescription: `The ramparts and medina of Essaouira, inscribed as a UNESCO World Heritage Site, represent a remarkable example of an 18th-century fortified port town. The walls and bastions were designed by French architect Theodore Cornut under the orders of Sultan Mohammed III, who wanted to create a model city and trading port on the Atlantic coast.

The Skala de la Ville (City Bastion) offers the most dramatic experience, with its row of bronze cannons pointing out to sea from the battlements. Below, the Atlantic waves crash against the rocks, and on clear days, the Iles Purpuraires are visible offshore. The fishing harbor is one of Morocco's most photogenic, with rows of painted blue boats and a lively fish market where the day's catch is auctioned each afternoon.`,
    entranceFeeMad: null,
    openingHours: 'Open access to medina; Skala 9am - 6pm',
    durationHours: 2,
    bestTime: 'Late afternoon for golden light on the ramparts',
    accessibility: 'Mostly accessible; some sections have steps',
    isUnesco: true,
    rating: 4.5,
    reviewCount: 5670,
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
    galleryImages: [],
    latitude: 31.5126,
    longitude: -9.7693,
    tips: [
      'Walk the full length of the Skala de la Ville for the best views',
      'The harbor grill stalls serve the freshest seafood you will ever eat',
      'Essaouira featured as Astapor in Game of Thrones',
    ],
  },
  {
    slug: 'bab-mansour',
    name: 'Bab Mansour',
    citySlug: 'meknes',
    cityName: 'Meknes',
    type: 'monument',
    description: 'The grandest gate in Morocco, an imposing masterpiece of zellige tilework and marble columns from the 18th century.',
    longDescription: `Bab Mansour el-Aleuj is widely considered the finest gateway in all of Morocco and one of the most beautiful in the entire Islamic world. Completed in 1732 under Sultan Moulay Ismail, this monumental gate is the most recognizable symbol of Meknes and a testament to the sultan's ambition to rival the Palace of Versailles.

The gate's massive horseshoe arch is flanked by bastions and covered in intricate geometric patterns of zellige tilework in green, white, and black. The marble columns incorporated into the design were taken from the Roman ruins of Volubilis, while the proportions and decorative scheme create a sense of overwhelming grandeur that continues to impress three centuries later.`,
    entranceFeeMad: null,
    openingHours: 'Open access (exterior viewing); not open to enter',
    durationHours: 0.25,
    bestTime: 'Morning or late afternoon for photographs',
    accessibility: 'Fully accessible from the square',
    isUnesco: true,
    rating: 4.4,
    reviewCount: 3450,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
    galleryImages: [],
    latitude: 33.8923,
    longitude: -5.5606,
    tips: [
      'Best photographed in the morning when the sun illuminates the facade',
      'The square in front is a great people-watching spot',
      'Combine with a visit to the Moulay Ismail Mausoleum nearby',
    ],
  },
];

export function getAttractionBySlug(slug: string): AttractionData | undefined {
  return attractions.find((a) => a.slug === slug);
}

export function getAttractionsByCity(citySlug: string): AttractionData[] {
  return attractions.filter((a) => a.citySlug === citySlug);
}

export function getAttractionsByType(type: string): AttractionData[] {
  return attractions.filter((a) => a.type === type);
}

export function getUnescoAttractions(): AttractionData[] {
  return attractions.filter((a) => a.isUnesco);
}

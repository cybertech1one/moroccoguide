import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  Star,
  MapPin,
  ChevronRight,
  Home,
  Clock,
  Users,
  Calendar,
  CheckCircle,
  XCircle,
  ArrowRight,
  Compass,
  Tag,
  Eye,
  Camera,
  Globe,
  DollarSign,
  Mountain,
  CircleDot,
} from 'lucide-react'
import { generateStructuredData, truncate } from '@/lib/utils'

/* ================================================================
   TOUR DATA
   ================================================================ */

interface ItineraryDay {
  day: number
  title: string
  description: string
}

interface Tour {
  slug: string
  name: string
  type: string
  duration: string
  price: string
  groupSize: string
  description: string
  images: string[]
  rating: number
  reviewCount: number
  highlights: string[]
  included: string[]
  notIncluded: string[]
  itinerary: ItineraryDay[]
  meetingPoint: string
  startTime: string
  difficulty: string
  tags: string[]
}

const tours: Tour[] = [
  {
    slug: 'desert-safari',
    name: '3-Day Sahara Desert Safari',
    type: 'Desert Adventure',
    duration: '3 Days / 2 Nights',
    price: 'From 2,500 MAD',
    groupSize: '4-16 people',
    description:
      'Embark on the ultimate Moroccan adventure with this three-day Sahara Desert Safari departing from Marrakech. Cross the dramatic High Atlas Mountains via the Tizi n\'Tichka pass, stopping at the UNESCO World Heritage Site of Ait Ben Haddou before continuing through the Dades Valley and the towering Todra Gorge. The journey takes you through some of Morocco\'s most spectacular and varied landscapes, from lush palm oases to barren moonscapes.\n\nThe highlight of the trip is the camel trek into the Erg Chebbi dunes at sunset, where towering golden sand dunes rise up to 150 meters from the desert floor. You will ride dromedary camels along ancient caravan routes as the Sahara transforms into an extraordinary canvas of amber, crimson, and violet. Your Berber guides will lead you to a traditional desert camp where a tagine dinner is prepared over open fire, followed by Gnawa drumming under a sky blazing with stars.\n\nThe second night is spent in a comfortable desert camp in the heart of the dunes, where the silence and immensity of the Sahara create a profoundly peaceful atmosphere. Wake before dawn to climb a dune and watch the sunrise paint the desert in warm golden tones. The return journey follows a different route through the Valley of Roses, famous for its annual rose harvest, and the dramatic Dades Gorge with its twisted rock formations.\n\nThis safari is suitable for all fitness levels and ages, with comfortable private transport between destinations, experienced English-speaking guides, and well-equipped desert camps with private tents and proper bedding. It is the most popular tour in Morocco for good reason: no other experience captures the diversity and magic of the country in just three days.',
    images: [
      'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&q=80',
      'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=1200&q=80',
      'https://images.unsplash.com/photo-1504233529578-6d46baba6d34?w=1200&q=80',
    ],
    rating: 4.7,
    reviewCount: 3421,
    highlights: [
      'Cross the High Atlas via Tizi n\'Tichka (2,260m)',
      'Visit Ait Ben Haddou UNESCO World Heritage Site',
      'Sunset camel trek into the Erg Chebbi dunes',
      'Overnight in a traditional Berber desert camp',
      'Drive through Todra Gorge and Valley of Roses',
    ],
    included: [
      'Private air-conditioned vehicle and experienced driver',
      'English-speaking Berber guide throughout',
      '2 nights accommodation (1 hotel + 1 desert camp)',
      'All breakfasts and dinners',
      'Camel trek and sandboarding equipment',
    ],
    notIncluded: [
      'Lunches and personal drinks',
      'Tips for guide and driver',
      'Travel insurance',
    ],
    itinerary: [
      { day: 1, title: 'Marrakech to Dades Valley', description: 'Depart Marrakech and cross the High Atlas Mountains via the Tizi n\'Tichka pass at 2,260m. Stop at the stunning Ait Ben Haddou kasbah for a guided tour. Continue through Ouarzazate, the "Hollywood of Africa," and arrive at your hotel in the Dades Valley.' },
      { day: 2, title: 'Dades Valley to Erg Chebbi', description: 'Morning visit to the dramatic Todra Gorge with its 300m-high canyon walls. Drive through palm oases and Berber villages to Merzouga. In the late afternoon, mount your camel for the trek into the Erg Chebbi dunes to your desert camp. Enjoy a traditional dinner and Gnawa music under the stars.' },
      { day: 3, title: 'Sahara to Marrakech', description: 'Optional sunrise dune climb. After breakfast, return by camel to Merzouga. Drive back to Marrakech via a different route through the Valley of Roses and the dramatic Dades Gorge. Arrive in Marrakech by evening.' },
    ],
    meetingPoint: 'Hotel pickup in Marrakech Medina or Gueliz',
    startTime: '7:00 AM',
    difficulty: 'Easy',
    tags: ['Desert', 'Sahara', 'Camel Trek', 'Camping', 'Adventure'],
  },
  {
    slug: 'imperial-cities',
    name: '7-Day Imperial Cities Circuit',
    type: 'Cultural Tour',
    duration: '7 Days / 6 Nights',
    price: 'From 8,500 MAD',
    groupSize: '4-12 people',
    description:
      'Discover the grand sweep of Moroccan history and culture on this comprehensive seven-day circuit of the four Imperial Cities: Rabat, Meknes, Fes, and Marrakech. Each city served as the capital of a different Moroccan dynasty, and each preserves extraordinary monuments, medinas, and artistic traditions that reflect its period of greatest glory. This tour provides the most complete immersion in Morocco\'s imperial heritage available.\n\nBeginning in Casablanca, you will visit the magnificent Hassan II Mosque before traveling to Rabat, Morocco\'s current capital, to explore the Kasbah of the Udayas and the Hassan Tower. From Rabat, the route leads to Meknes, the "Versailles of Morocco," where Sultan Moulay Ismail built a vast palace complex, and to the nearby Roman ruins of Volubilis with their extraordinary mosaic floors.\n\nThe heart of the tour is two full days in Fes, Morocco\'s spiritual and intellectual capital. With a local guide, you will navigate the world\'s largest car-free urban area, visiting the al-Qarawiyyin University, the Bou Inania Madrasa, the Chouara Tannery, and the hidden workshops of master artisans. A detour to the blue-washed mountain town of Chefchaouen provides a stunning contrast to the intensity of Fes.\n\nThe final leg crosses the Middle Atlas Mountains, where cedar forests shelter Barbary macaques, before descending to Marrakech. Here, you will explore the Jardin Majorelle, the Bahia Palace, the Saadian Tombs, and the incomparable spectacle of Jemaa el-Fnaa. Throughout the journey, you will stay in carefully selected riads and boutique hotels that reflect the architectural character of each city.',
    images: [
      'https://images.unsplash.com/photo-1549180030-48bf079c5993?w=1200&q=80',
      'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1200&q=80',
      'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&q=80',
    ],
    rating: 4.8,
    reviewCount: 1876,
    highlights: [
      'All four Imperial Cities: Rabat, Meknes, Fes, and Marrakech',
      'Volubilis Roman ruins with incredible mosaic floors',
      'Two full days exploring the Fes Medina with a local guide',
      'Blue-washed streets of Chefchaouen',
      'Handpicked riad accommodation in each city',
    ],
    included: [
      'Private air-conditioned vehicle and driver for 7 days',
      'Licensed English-speaking guides in each city',
      '6 nights in traditional riads and boutique hotels',
      'Daily breakfasts and 4 dinners',
      'All entrance fees to monuments and museums',
    ],
    notIncluded: [
      'International flights and airport transfers',
      'Lunches and drinks not specified',
      'Personal shopping and souvenirs',
    ],
    itinerary: [
      { day: 1, title: 'Casablanca to Rabat', description: 'Arrive in Casablanca and visit the Hassan II Mosque. Transfer to Rabat to explore the Kasbah of the Udayas and the Hassan Tower. Overnight in a riad near the medina.' },
      { day: 2, title: 'Rabat to Meknes & Volubilis', description: 'Drive to Meknes and visit the grand Bab Mansour gate, the Royal Stables, and the Jewish Mellah. Afternoon excursion to the Roman ruins of Volubilis. Overnight in Meknes.' },
      { day: 3, title: 'Meknes to Chefchaouen', description: 'Journey north through the Rif Mountains to the blue pearl of Morocco. Spend the afternoon exploring the blue-washed medina and the Place Outa el-Hammam. Overnight in Chefchaouen.' },
      { day: 4, title: 'Chefchaouen to Fes', description: 'Morning hike to the Spanish Mosque for panoramic views. Drive to Fes through rolling countryside. Evening introduction walk through the medina with your guide. Overnight in a Fes riad.' },
      { day: 5, title: 'Full Day in Fes', description: 'Complete immersion in the Fes Medina: al-Qarawiyyin University, Bou Inania Madrasa, Chouara Tannery, Nejjarine Museum, and artisan workshops. Cooking class dinner in a local home.' },
      { day: 6, title: 'Fes to Marrakech', description: 'Cross the Middle Atlas Mountains through Ifrane and Azrou cedar forests with Barbary macaques. Continue through Beni Mellal to Marrakech. Evening free to explore Jemaa el-Fnaa. Overnight in Marrakech riad.' },
      { day: 7, title: 'Full Day in Marrakech', description: 'Visit Jardin Majorelle, Bahia Palace, Saadian Tombs, and Koutoubia Mosque. Afternoon in the souks. Farewell dinner on a rooftop terrace with Atlas Mountain views.' },
    ],
    meetingPoint: 'Casablanca Mohammed V Airport or Casablanca hotel',
    startTime: '9:00 AM (Day 1)',
    difficulty: 'Easy',
    tags: ['Cultural', 'Imperial Cities', 'Historic', 'UNESCO', 'Guided'],
  },
  {
    slug: 'atlas-trekking',
    name: '3-Day Atlas Mountains Trek',
    type: 'Adventure Trek',
    duration: '3 Days / 2 Nights',
    price: 'From 3,200 MAD',
    groupSize: '4-10 people',
    description:
      'Challenge yourself with this three-day trekking adventure through the spectacular High Atlas Mountains, culminating in a summit attempt of Mount Toubkal, the highest peak in North Africa at 4,167 meters. Starting from the traditional Berber village of Imlil, the trek follows ancient mule paths through terraced valleys, across high mountain passes, and past remote shepherding camps to the Toubkal Refuge, a mountain hut at 3,207 meters.\n\nThe first day of trekking takes you through the Azzaden Valley, one of the most beautiful and least visited valleys in the High Atlas. The trail winds through walnut groves and cherry orchards, past waterfalls and traditional stone houses, with each turn revealing new mountain vistas. Berber shepherds greet you along the way, and your muleteers transport the heavy gear while you walk unencumbered with just a daypack.\n\nDay two is the highlight: the summit push begins before dawn with headlamps illuminating the rocky trail. The final ascent involves some scrambling over loose scree, but the reward at the top is extraordinary -- a 360-degree panorama stretching from the Sahara Desert in the south to the Atlantic coast in the west and the rolling Haouz Plain surrounding Marrakech in the north. The descent to the Neltner Refuge provides well-earned rest.\n\nThis trek is suitable for reasonably fit hikers with some mountain experience, though no technical climbing skills are required. All equipment, experienced mountain guides, and hearty traditional meals are included. The combination of physical challenge, stunning scenery, authentic cultural encounters, and the accomplishment of standing on North Africa\'s rooftop makes this one of Morocco\'s most rewarding experiences.',
    images: [
      'https://images.unsplash.com/photo-1504233529578-6d46baba6d34?w=1200&q=80',
      'https://images.unsplash.com/photo-1545041117-2f58be4c4584?w=1200&q=80',
      'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&q=80',
    ],
    rating: 4.6,
    reviewCount: 2134,
    highlights: [
      'Summit Mount Toubkal (4,167m), North Africa\'s highest peak',
      'Trek through remote Azzaden Valley with Berber villages',
      '360-degree panoramic views from the summit',
      'Stay in traditional mountain refuges',
      'Experienced Berber mountain guides and muleteers',
    ],
    included: [
      'Certified mountain guide and muleteers',
      '2 nights in mountain refuges or bivouacs',
      'All meals during the trek (hearty traditional food)',
      'Mule transport for heavy luggage',
      'Transfer from Marrakech to Imlil and return',
    ],
    notIncluded: [
      'Personal hiking equipment (boots, layers, sleeping bag liner)',
      'Travel insurance with mountain rescue coverage',
      'Tips for guide and muleteers',
    ],
    itinerary: [
      { day: 1, title: 'Marrakech to Azzaden Valley', description: 'Transfer from Marrakech to Imlil (1,740m). Begin trekking through the Azzaden Valley past Berber villages, walnut groves, and waterfalls. Ascend to the Azzaden Trekking Lodge or bivouac at 2,500m. Evening meal and stargazing.' },
      { day: 2, title: 'Summit Day - Mount Toubkal', description: 'Pre-dawn start for the summit attempt. Trek via the South Cwm route, ascending through scree slopes to the summit at 4,167m. Celebrate with panoramic views stretching to the Sahara. Descend to the Toubkal Refuge (3,207m) for dinner and rest.' },
      { day: 3, title: 'Descent to Imlil', description: 'Descend through the Mizane Valley past the shrine of Sidi Chamharouch. Lunch in Imlil with a celebration meal. Transfer back to Marrakech, arriving by late afternoon.' },
    ],
    meetingPoint: 'Hotel pickup in Marrakech',
    startTime: '7:00 AM (Day 1)',
    difficulty: 'Challenging',
    tags: ['Trekking', 'Mountains', 'Adventure', 'Summit', 'Atlas'],
  },
  {
    slug: 'marrakech-day-tour',
    name: 'Marrakech Full Day Tour',
    type: 'City Tour',
    duration: '1 Day (8 hours)',
    price: 'From 600 MAD',
    groupSize: '2-8 people',
    description:
      'Experience the best of Marrakech in a single, action-packed day with this comprehensive guided tour covering all the major landmarks, hidden gems, and cultural highlights of Morocco\'s most vibrant city. Led by a licensed local guide with deep knowledge of the city\'s 900-year history, this tour provides the perfect orientation for first-time visitors and new discoveries for returning travelers.\n\nThe morning begins with a visit to the serene Jardin Majorelle and its stunning Berber Museum before the heat of the day sets in. From there, you will explore the ornate interiors of the Bahia Palace, with its extraordinary painted ceilings and zellige floors, and the atmospheric ruins of the El Badi Palace. The morning continues with a visit to the beautifully preserved Saadian Tombs, hidden for centuries behind a wall and only rediscovered in 1917.\n\nAfter a traditional Moroccan lunch at a carefully chosen restaurant in the medina, the afternoon is devoted to the souks and artisan quarters. Your guide will navigate the labyrinthine market streets, stopping at workshops where craftsmen practice generations-old techniques of metalwork, leatherwork, woodcarving, and textile dyeing. You will visit spice merchants, carpet sellers, and the iconic Chouara Tannery.\n\nAs the afternoon fades into evening, you will be positioned perfectly to experience the magical transformation of Jemaa el-Fnaa square, watching the food stalls being assembled and the entertainers taking their positions as the sun sets over the Koutoubia Mosque. The tour concludes with a rooftop mint tea overlooking the square, leaving you with a deep appreciation for this extraordinary city.',
    images: [
      'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&q=80',
      'https://images.unsplash.com/photo-1585232004423-244e0e6904e3?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=1200&q=80',
    ],
    rating: 4.8,
    reviewCount: 4567,
    highlights: [
      'Jardin Majorelle and Berber Museum visit',
      'Bahia Palace and El Badi Palace interiors',
      'Guided tour of the souks and artisan workshops',
      'Traditional Moroccan lunch in the medina',
      'Sunset experience at Jemaa el-Fnaa square',
    ],
    included: [
      'Licensed English-speaking local guide',
      'All entrance fees to monuments and palaces',
      'Traditional Moroccan lunch at a selected restaurant',
      'Mint tea on a rooftop terrace',
      'Hotel pickup and drop-off within Marrakech',
    ],
    notIncluded: [
      'Personal purchases and souvenirs',
      'Additional drinks beyond included tea',
      'Tips for guide',
    ],
    itinerary: [
      { day: 1, title: 'Full Day Marrakech Exploration', description: 'Morning: Jardin Majorelle, Bahia Palace, El Badi Palace, and Saadian Tombs. Lunch at a traditional medina restaurant. Afternoon: Guided souk tour through artisan workshops, spice markets, and leather quarter. Evening: Jemaa el-Fnaa transformation and rooftop mint tea overlooking the square.' },
    ],
    meetingPoint: 'Hotel lobby in Marrakech',
    startTime: '9:00 AM',
    difficulty: 'Easy',
    tags: ['City Tour', 'Cultural', 'Guided', 'Marrakech', 'Souks'],
  },
  {
    slug: 'fes-medina-tour',
    name: 'Fes Medina Walking Tour',
    type: 'Walking Tour',
    duration: '1 Day (6 hours)',
    price: 'From 500 MAD',
    groupSize: '2-6 people',
    description:
      'Navigate the world\'s largest car-free urban area with an expert local guide on this immersive walking tour of Fes el-Bali, the ancient medina that has been the spiritual and intellectual heart of Morocco for over a thousand years. With more than 9,000 alleyways, getting lost is almost inevitable without a guide, and this tour ensures you discover the most significant sites while also stumbling upon hidden treasures.\n\nYour guide will lead you through the labyrinthine streets to the iconic Chouara Tannery, where leather has been produced using traditional methods for nearly a millennium. From the elevated terraces of surrounding shops, you will gaze down on the honeycomb of stone vats filled with vivid natural dyes. The tour continues to the Bou Inania Madrasa, one of the finest examples of Marinid architecture, with its intricate carved stucco, zellige tilework, and towering cedar screens.\n\nThe walk passes through the different artisan quarters of the medina, each dedicated to a specific craft: the coppersmiths who hammer intricate designs into brass trays, the woodworkers who carve elaborate moucharabieh screens, and the weavers who produce silk brocades on hand looms. Your guide will introduce you to master artisans and explain the techniques that have been passed down through families for generations.\n\nThe tour includes a visit to the al-Qarawiyyin University complex, founded in 859 AD and recognized as the oldest existing educational institution in the world. A traditional lunch in a hidden riad restaurant provides a welcome break and a taste of authentic Fassi cuisine. The tour concludes at the iconic Bab Bou Jeloud, the ornate blue gate that serves as the main entrance to the medina.',
    images: [
      'https://images.unsplash.com/photo-1549180030-48bf079c5993?w=1200&q=80',
      'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1200&q=80',
      'https://images.unsplash.com/photo-1577828739793-698c09a53b24?w=1200&q=80',
    ],
    rating: 4.7,
    reviewCount: 2987,
    highlights: [
      'Expert navigation of the 9,000-alleyway Fes Medina',
      'Chouara Tannery viewing from elevated terraces',
      'Bou Inania Madrasa with exquisite Marinid architecture',
      'Visits to master artisan workshops',
      'Traditional Fassi lunch in a hidden riad',
    ],
    included: [
      'Licensed local guide with deep medina knowledge',
      'Traditional Fassi lunch in a riad restaurant',
      'Mint tea with artisans in their workshops',
      'All entrance fees to madrasas and museums',
      'Sprig of mint for the tannery visit',
    ],
    notIncluded: [
      'Personal purchases from artisan shops',
      'Additional food and drinks',
      'Tips for guide',
    ],
    itinerary: [
      { day: 1, title: 'Full Fes Medina Immersion', description: 'Start at Bab Bou Jeloud, the blue gate. Navigate through the artisan quarters to the Chouara Tannery. Visit Bou Inania Madrasa and the al-Qarawiyyin University area. Explore coppersmith, weaver, and woodworking workshops. Traditional lunch in a riad. Afternoon through the spice souk and Nejjarine Museum. Conclude at the Merenid Tombs viewpoint.' },
    ],
    meetingPoint: 'Bab Bou Jeloud (Blue Gate), Fes',
    startTime: '9:30 AM',
    difficulty: 'Moderate',
    tags: ['Walking Tour', 'Cultural', 'Medina', 'Fes', 'Artisan'],
  },
  {
    slug: 'coastal-road-trip',
    name: '5-Day Atlantic Coast Road Trip',
    type: 'Road Trip',
    duration: '5 Days / 4 Nights',
    price: 'From 5,800 MAD',
    groupSize: '2-8 people',
    description:
      'Discover the wild beauty of Morocco\'s Atlantic coastline on this five-day road trip from Casablanca to Essaouira, with stops at charming fishing villages, ancient fortified ports, world-class surf breaks, and some of the most spectacular coastal scenery in North Africa. This tour reveals a side of Morocco that many visitors miss, trading the desert and mountains for crashing waves, ocean breezes, and fresh seafood.\n\nFrom Casablanca, the route heads south to the historic Portuguese fortified port of El Jadida, a UNESCO World Heritage Site with a remarkable underground cistern and rampart walks overlooking the ocean. Continue to Oualidia, a tranquil lagoon town famous for having the finest oysters in Morocco, where you will enjoy a seafood lunch by the water before continuing to the artistic port city of Safi, known for its distinctive pottery tradition.\n\nThe coastal road from Safi to Essaouira is one of the most scenic drives in Morocco, with dramatic cliff-top views, hidden beaches, and traditional argan oil cooperatives where Berber women crack the nuts and press the oil using ancient stone tools. The route passes through areas where goats famously climb argan trees, creating one of Morocco\'s most photographed scenes.\n\nThe tour culminates with two days in Essaouira, the "Wind City of Africa," a bohemian fortified port that has inspired artists and musicians from Jimi Hendrix to Orson Welles. The UNESCO-listed medina is a delight to explore, with its whitewashed buildings, blue shutters, and gallery-lined streets. The wide sandy beach stretches for miles, perfect for walking, horseback riding, or trying your hand at windsurfing or kitesurfing.',
    images: [
      'https://images.unsplash.com/photo-1553244886-a796b2e8e01f?w=1200&q=80',
      'https://images.unsplash.com/photo-1570698473651-b2de99bae12f?w=1200&q=80',
      'https://images.unsplash.com/photo-1549180030-48bf079c5993?w=1200&q=80',
    ],
    rating: 4.5,
    reviewCount: 1543,
    highlights: [
      'UNESCO-listed El Jadida Portuguese cistern',
      'Famous Oualidia oysters by the lagoon',
      'Scenic coastal drive with cliff-top views',
      'Argan oil cooperative visit in the countryside',
      'Two days exploring bohemian Essaouira',
    ],
    included: [
      'Private vehicle with experienced driver for 5 days',
      '4 nights in coastal boutique hotels and riads',
      'Daily breakfast and 2 seafood dinners',
      'All entrance fees and guided city walks',
      'Argan oil cooperative visit with tasting',
    ],
    notIncluded: [
      'Lunches and additional meals',
      'Water sports and surfing equipment rental',
      'Personal purchases and tips',
    ],
    itinerary: [
      { day: 1, title: 'Casablanca to El Jadida', description: 'Depart Casablanca and drive along the coast to El Jadida. Explore the Portuguese cistern, ramparts, and the atmospheric old medina. Fresh fish lunch by the harbor. Overnight in El Jadida.' },
      { day: 2, title: 'El Jadida to Oualidia', description: 'Drive to the Oualidia lagoon, stopping at scenic viewpoints along the way. Oyster tasting and seafood lunch at a lagoon-side restaurant. Afternoon kayaking or relaxing on the beach. Overnight in Oualidia.' },
      { day: 3, title: 'Oualidia to Safi', description: 'Explore Safi\'s famous pottery quarter and the Portuguese Sea Castle. Visit a pottery workshop to see the distinctive Safi ceramic techniques. Overnight in Safi.' },
      { day: 4, title: 'Safi to Essaouira', description: 'Scenic coastal drive with stops at argan oil cooperatives and the famous goats-in-trees. Arrive in Essaouira for a guided medina walk, exploring the ramparts, harbor, and galleries. Seafood dinner in the port. Overnight in Essaouira riad.' },
      { day: 5, title: 'Full Day in Essaouira', description: 'Morning free for beach activities, windsurfing, or horseback riding. Afternoon exploring the souks, Gnawa music venues, and art galleries. Optional sunset camel ride on the beach. Evening departure or optional extra night.' },
    ],
    meetingPoint: 'Casablanca hotel or airport pickup',
    startTime: '8:30 AM (Day 1)',
    difficulty: 'Easy',
    tags: ['Coastal', 'Road Trip', 'Seafood', 'Beach', 'Essaouira'],
  },
  {
    slug: 'cooking-class-marrakech',
    name: 'Moroccan Cooking Class Marrakech',
    type: 'Culinary Experience',
    duration: 'Half Day (4 hours)',
    price: 'From 450 MAD',
    groupSize: '2-10 people',
    description:
      'Unlock the secrets of Moroccan cuisine in this hands-on cooking class set in a beautiful traditional riad in the heart of the Marrakech Medina. Led by a professional Moroccan chef, you will learn to prepare an authentic multi-course Moroccan meal from scratch, starting with a guided tour of the local souk to select the freshest ingredients and rarest spices.\n\nThe experience begins with an immersive walk through the spice souk, where your chef guide explains the uses and origins of the dozens of spices that form the backbone of Moroccan cooking: saffron from Taliouine, ras el hanout blends unique to each spice merchant, preserved lemons, cumin, turmeric, and aromatic herbs. You will select your own ingredients and learn the art of haggling along the way.\n\nBack in the riad kitchen, the cooking begins. You will prepare a traditional Moroccan salad course, a main tagine (choosing from lamb, chicken, or vegetable options), handmade couscous rolled by hand in the traditional manner, and a sweet pastilla or Moroccan pastry for dessert. The chef demonstrates each technique while sharing family recipes passed down through generations, and you practice each step yourself.\n\nThe class culminates in a communal meal where you sit down to enjoy the fruits of your labor in the beautiful riad courtyard, accompanied by mint tea prepared the traditional way. You will leave with a recipe booklet and the confidence to recreate these dishes at home. This experience is as much a cultural immersion as a cooking lesson, offering insights into Moroccan family traditions, hospitality customs, and the central role of food in Moroccan social life.',
    images: [
      'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1200&q=80',
      'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&q=80',
      'https://images.unsplash.com/photo-1549180030-48bf079c5993?w=1200&q=80',
    ],
    rating: 4.9,
    reviewCount: 3876,
    highlights: [
      'Guided souk tour to select fresh ingredients and spices',
      'Hands-on preparation of a full Moroccan multi-course meal',
      'Learn traditional tagine, couscous, and pastry techniques',
      'Cook in a beautiful riad kitchen in the medina',
      'Take home a recipe booklet to recreate dishes',
    ],
    included: [
      'Professional Moroccan chef instructor',
      'Guided spice souk tour with ingredient shopping',
      'All cooking ingredients and equipment',
      'Full multi-course meal you prepare yourself',
      'Recipe booklet and mint tea ceremony',
    ],
    notIncluded: [
      'Transportation to the riad (address provided)',
      'Additional drinks beyond mint tea',
      'Personal spice purchases from the souk',
    ],
    itinerary: [
      { day: 1, title: 'Complete Cooking Experience', description: 'Meet at the riad. Guided walk through the spice souk to select ingredients (45 min). Return to the riad kitchen for hands-on cooking instruction: Moroccan salads, main tagine, handmade couscous, and dessert pastry (2 hours). Communal meal in the courtyard with mint tea ceremony (1 hour).' },
    ],
    meetingPoint: 'Riad cooking school near Jemaa el-Fnaa',
    startTime: '10:00 AM or 3:00 PM',
    difficulty: 'Easy',
    tags: ['Cooking', 'Culinary', 'Cultural', 'Marrakech', 'Hands-on'],
  },
  {
    slug: 'hot-air-balloon',
    name: 'Hot Air Balloon Over Marrakech',
    type: 'Scenic Flight',
    duration: 'Half Day (4 hours)',
    price: 'From 1,800 MAD',
    groupSize: '2-20 people',
    description:
      'Soar above the Moroccan landscape in a magnificent hot air balloon as the sun rises over the Atlas Mountains and the palm-dotted plains surrounding Marrakech. This unforgettable aerial experience offers a perspective of Morocco that few travelers ever see, with the entire High Atlas mountain range stretched across the horizon, traditional Berber villages dotting the countryside below, and the red walls of Marrakech glowing in the first light of day.\n\nThe adventure begins with a pre-dawn pickup from your hotel in Marrakech and a short drive to the launch site in the peaceful countryside. As the balloon is inflated and the burners roar to life, you will watch the massive envelope rise against the lightening sky. The gentle lift-off is smooth and surprisingly serene, and within moments you are floating silently above the Moroccan landscape at altitudes of up to 1,000 meters.\n\nThe flight lasts approximately one hour, during which the pilot navigates the balloon using thermal currents and wind layers. Below, you may see farmers tending their fields, camels being led along dusty tracks, and the distinctive pattern of traditional Moroccan villages with their rammed-earth walls and green courtyards. The Atlas Mountains provide a constant dramatic backdrop, their snow-capped peaks gleaming in the morning sun.\n\nAfter landing, a traditional Berber breakfast awaits in a tent set up in the countryside, featuring freshly baked msemen bread, honey, Moroccan preserves, fresh orange juice, and mint tea. A certificate of flight is presented, and you are transferred back to your hotel in Marrakech with the rest of the day free. The entire experience, from the otherworldly silence of the flight to the communal breakfast in the field, creates memories that last a lifetime.',
    images: [
      'https://images.unsplash.com/photo-1585232004423-244e0e6904e3?w=1200&q=80',
      'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&q=80',
      'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&q=80',
    ],
    rating: 4.7,
    reviewCount: 1654,
    highlights: [
      'Sunrise flight over the Atlas Mountains foothills',
      'Silent aerial views of traditional Berber villages',
      'Up to 1 hour of flight time at altitudes to 1,000m',
      'Traditional Berber breakfast after landing',
      'Flight certificate and commemorative photos',
    ],
    included: [
      'Hotel pickup and return in Marrakech',
      'One-hour hot air balloon flight',
      'Experienced certified pilot',
      'Traditional Berber breakfast in the countryside',
      'Flight certificate',
    ],
    notIncluded: [
      'Personal photos and videos (staff photos available for purchase)',
      'Travel insurance',
      'Tips for crew',
    ],
    itinerary: [
      { day: 1, title: 'Sunrise Balloon Adventure', description: 'Pre-dawn hotel pickup (5:30 AM). Drive to launch site and watch balloon inflation. One-hour flight over the Marrakech plains with Atlas Mountain views. Landing and traditional Berber breakfast in the countryside. Return transfer to Marrakech hotel by 10:00 AM.' },
    ],
    meetingPoint: 'Hotel pickup in Marrakech',
    startTime: '5:30 AM (pre-dawn pickup)',
    difficulty: 'Easy',
    tags: ['Scenic', 'Balloon', 'Sunrise', 'Marrakech', 'Adventure'],
  },
  {
    slug: 'chefchaouen-day-trip',
    name: 'Chefchaouen Day Trip from Fes',
    type: 'Day Trip',
    duration: '1 Day (12 hours)',
    price: 'From 800 MAD',
    groupSize: '2-8 people',
    description:
      'Escape the intensity of Fes for a day and discover the enchanting blue-washed mountain town of Chefchaouen, one of Morocco\'s most photogenic destinations. This full-day excursion takes you through the dramatic Rif Mountains on a scenic drive that is itself worth the trip, with panoramic viewpoints, lush valleys, and traditional Berber villages along the way.\n\nThe drive from Fes to Chefchaouen takes approximately four hours and passes through some of Morocco\'s most verdant countryside. The Rif Mountains are greener and more heavily forested than the Atlas ranges further south, with rolling hills covered in pine and cedar forests. Your driver will stop at several viewpoints along the way, offering spectacular vistas of the mountain landscape.\n\nUpon arrival in Chefchaouen, a local guide will lead you through the magical blue medina. Every surface is painted in varying shades of blue, from powder blue to deep cobalt, creating a dreamlike atmosphere that has made this small town world-famous. You will visit the central Place Outa el-Hammam with its 15th-century Grand Mosque, explore the small kasbah museum, and wander through the distinctive shops selling woven blankets, goat cheese, and Rif Mountain herbs.\n\nAfter a traditional lunch in a blue-walled restaurant with mountain views, you will have free time to explore on your own, photograph the iconic blue streets, and browse the artisan shops. The return drive offers different views as the late afternoon light transforms the mountain landscape. You will arrive back in Fes by evening, with a memory card full of blue-hued photographs and a renewed appreciation for Morocco\'s incredible diversity.',
    images: [
      'https://images.unsplash.com/photo-1553244886-a796b2e8e01f?w=1200&q=80',
      'https://images.unsplash.com/photo-1577828739793-698c09a53b24?w=1200&q=80',
      'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1200&q=80',
    ],
    rating: 4.6,
    reviewCount: 2345,
    highlights: [
      'Scenic drive through the Rif Mountains',
      'Guided tour of the famous blue medina',
      'Place Outa el-Hammam and Grand Mosque',
      'Traditional lunch in a blue-walled restaurant',
      'Free time for photography and shopping',
    ],
    included: [
      'Private air-conditioned vehicle and driver',
      'Local guide in Chefchaouen',
      'Traditional Moroccan lunch',
      'Hotel pickup and drop-off in Fes',
      'Bottled water during the drive',
    ],
    notIncluded: [
      'Additional drinks and snacks',
      'Personal purchases and souvenirs',
      'Tips for guide and driver',
    ],
    itinerary: [
      { day: 1, title: 'Fes to Chefchaouen Round Trip', description: 'Depart Fes at 7:30 AM. Scenic drive through the Rif Mountains with photo stops. Arrive Chefchaouen around 11:30 AM for a guided medina tour. Traditional lunch with mountain views. Free time for photography and shopping. Depart at 4:00 PM. Arrive back in Fes by 8:00 PM.' },
    ],
    meetingPoint: 'Hotel pickup in Fes Medina or Ville Nouvelle',
    startTime: '7:30 AM',
    difficulty: 'Easy',
    tags: ['Day Trip', 'Blue City', 'Photography', 'Mountains', 'Scenic'],
  },
  {
    slug: 'camel-trek-merzouga',
    name: 'Overnight Camel Trek Merzouga',
    type: 'Desert Experience',
    duration: '2 Days / 1 Night',
    price: 'From 1,200 MAD',
    groupSize: '2-12 people',
    description:
      'Experience the quintessential Sahara adventure with this overnight camel trek into the towering Erg Chebbi dunes from the desert village of Merzouga. This intimate desert experience strips away the modern world and immerses you in the timeless rhythm of the Sahara, from the gentle sway of a dromedary camel to the infinite silence of a starlit night in the dunes.\n\nThe trek begins in the late afternoon as the harsh midday heat subsides and the desert light begins to soften. Your Berber guide will help you mount your camel and lead the small caravan along the same routes used by trans-Saharan traders for centuries. As you penetrate deeper into the dune field, the modern world disappears behind walls of sand, and the only sounds are the soft padding of camel feet and the whisper of wind across the dune crests.\n\nYour desert camp is set in a dramatic location among the high dunes, with traditional Berber tents arranged around a central campfire. As the sun sets, the dunes transform through an incredible spectrum of colors. Dinner is a traditional tagine cooked over the campfire, followed by Berber drumming and singing. When the music fades, you will experience a night sky of almost supernatural clarity, with the Milky Way blazing overhead and shooting stars a regular occurrence.\n\nThe predawn wake-up call comes in time to climb a nearby dune for the sunrise, which paints the sand sea in shades of pink, gold, and amber. After a breakfast of Moroccan crepes, honey, and coffee, the return camel trek takes you back to Merzouga through the morning stillness. This overnight experience in the Sahara is consistently rated as one of the most memorable experiences in all of Morocco.',
    images: [
      'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=1200&q=80',
      'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&q=80',
      'https://images.unsplash.com/photo-1504233529578-6d46baba6d34?w=1200&q=80',
    ],
    rating: 4.8,
    reviewCount: 4123,
    highlights: [
      'Sunset and sunrise camel treks through Erg Chebbi',
      'Traditional Berber desert camp with private tents',
      'Campfire dinner with Gnawa music under the stars',
      'Unparalleled Saharan stargazing',
      'Experienced Berber guides with deep desert knowledge',
    ],
    included: [
      'Return camel trek into the Erg Chebbi dunes',
      'One night in a traditional desert camp (private tent)',
      'Dinner, breakfast, and mint tea',
      'Berber guide and camel handlers',
      'Sandboarding equipment',
    ],
    notIncluded: [
      'Transport to and from Merzouga',
      'Sleeping bag or warm layers (can be rented)',
      'Tips for guide and camel handlers',
    ],
    itinerary: [
      { day: 1, title: 'Sunset Trek to Desert Camp', description: 'Meet at the Merzouga meeting point at 4:00 PM. Mount your camel for the 1.5-hour trek into the heart of Erg Chebbi. Watch the sunset from the dune tops. Arrive at camp for traditional tagine dinner, Berber music, and stargazing.' },
      { day: 2, title: 'Sunrise and Return Trek', description: 'Pre-dawn wake-up for sunrise climb. Breakfast at camp. Return camel trek to Merzouga through the morning dunes, arriving by 9:00 AM. Optional sandboarding session.' },
    ],
    meetingPoint: 'Merzouga village (Hotel Yasmina or designated meeting point)',
    startTime: '4:00 PM (Day 1)',
    difficulty: 'Easy',
    tags: ['Desert', 'Camel Trek', 'Camping', 'Sahara', 'Stargazing'],
  },
  {
    slug: 'photography-tour',
    name: '5-Day Morocco Photography Tour',
    type: 'Photography Tour',
    duration: '5 Days / 4 Nights',
    price: 'From 9,500 MAD',
    groupSize: '4-8 people',
    description:
      'Capture the extraordinary visual diversity of Morocco on this five-day photography tour designed for enthusiast and advanced photographers. Led by a professional travel photographer with extensive Morocco experience, this small-group tour is timed to maximize golden hour shooting opportunities at Morocco\'s most photogenic locations, from the blue streets of Chefchaouen to the golden dunes of the Sahara.\n\nThe tour begins in Marrakech, where an evening session in the Jemaa el-Fnaa square provides the perfect introduction to street photography in Morocco\'s most visually intense environment. Your photography guide will share techniques for capturing candid portraits, managing challenging light conditions, and composing compelling images in chaotic environments. Early morning sessions in the quiet medina streets capture a different mood entirely.\n\nFrom Marrakech, the route takes you through the Atlas Mountains to the Sahara, with multiple stops at locations chosen specifically for their photographic potential: the kasbah of Ait Ben Haddou in late afternoon light, the towering walls of Todra Gorge, and the Erg Chebbi dunes at sunrise and sunset. The desert camp overnight provides opportunities for astrophotography and long-exposure night sky work under some of the darkest and clearest skies in North Africa.\n\nThe tour concludes with two days shooting in Fes and Chefchaouen, two of the most photogenic cities in the world. In Fes, your guide navigates you to hidden viewpoints, artisan workshops with perfect natural light, and the iconic Chouara Tannery. In Chefchaouen, pre-dawn sessions capture the blue streets without tourists, and your guide knows every angle that makes this blue city so captivating. Post-processing workshops are included each evening.',
    images: [
      'https://images.unsplash.com/photo-1553244886-a796b2e8e01f?w=1200&q=80',
      'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&q=80',
      'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=1200&q=80',
    ],
    rating: 4.9,
    reviewCount: 876,
    highlights: [
      'Led by a professional travel photographer',
      'Golden hour sessions at Morocco\'s most photogenic locations',
      'Sahara desert astrophotography and sunrise shoots',
      'Pre-dawn access to Chefchaouen\'s blue streets',
      'Daily post-processing workshops and image reviews',
    ],
    included: [
      'Professional photography guide and instructor',
      'Private transport and driver throughout',
      '4 nights in photographer-selected accommodations',
      'All breakfasts and 3 dinners',
      'Daily post-processing workshops (laptop required)',
    ],
    notIncluded: [
      'Camera equipment (bring your own gear)',
      'Lunches and personal drinks',
      'Travel insurance and tips',
    ],
    itinerary: [
      { day: 1, title: 'Marrakech - Street Photography', description: 'Afternoon meet and greet. Evening golden hour session in Jemaa el-Fnaa. Techniques for street photography, candid portraits, and low-light shooting. Post-processing workshop at the riad.' },
      { day: 2, title: 'Marrakech to Sahara via Atlas', description: 'Pre-dawn medina shoot. Drive through the Atlas Mountains with landscape photography stops. Afternoon at Ait Ben Haddou. Evening sunset session in Erg Chebbi. Night astrophotography workshop at desert camp.' },
      { day: 3, title: 'Sahara to Todra Gorge', description: 'Pre-dawn Sahara sunrise shoot from the dune tops. Morning in Todra Gorge capturing the canyon walls. Drive to Fes via the Ziz Valley with photography stops. Evening post-processing.' },
      { day: 4, title: 'Fes Medina', description: 'Early morning Fes Medina session: tanneries, artisan workshops, madrasas. Techniques for architectural photography and working with natural light. Afternoon free for personal shooting. Evening review and critique session.' },
      { day: 5, title: 'Chefchaouen Blue City', description: 'Pre-dawn drive to Chefchaouen. Sunrise session in the empty blue streets. Mid-morning and afternoon exploration of hidden alleys and viewpoints. Final image review and farewell lunch.' },
    ],
    meetingPoint: 'Marrakech riad (address sent upon booking)',
    startTime: '3:00 PM (Day 1)',
    difficulty: 'Moderate',
    tags: ['Photography', 'Workshops', 'Small Group', 'Creative', 'Adventure'],
  },
  {
    slug: 'surf-camp-taghazout',
    name: 'Week-Long Surf Camp Taghazout',
    type: 'Surf & Beach',
    duration: '7 Days / 6 Nights',
    price: 'From 4,500 MAD',
    groupSize: '4-16 people',
    description:
      'Ride the legendary waves of Morocco\'s Atlantic coast at this week-long surf camp in Taghazout, a laid-back fishing village that has become one of the world\'s premier surf destinations. Whether you are a complete beginner or an experienced surfer looking to improve your technique, this camp combines daily surf sessions with a relaxed beach lifestyle, yoga, and authentic Moroccan hospitality.\n\nTaghazout sits at the center of a stretch of coastline blessed with an extraordinary concentration of world-class surf breaks. Anchor Point, just north of the village, is a legendary right-hand point break that produces long, perfectly formed waves. Hash Point, Panoramas, Killer Point, and Devil\'s Rock offer alternatives for different ability levels and swell conditions. Your experienced surf instructors know every break intimately and select the best spot each day based on conditions.\n\nThe camp is based in a comfortable surf house with ocean views, rooftop terrace, communal areas, and a relaxed social atmosphere. Each day includes a morning surf session with coaching, followed by video analysis over lunch. Afternoons offer optional yoga sessions, free surfing, exploring the village, or simply relaxing on the beach. The evenings feature communal dinners of fresh Moroccan food, often including the day\'s catch grilled on the rooftop terrace.\n\nBeyond the waves, Taghazout offers a unique cultural experience. The village retains its traditional fishing character, with colorful boats pulled up on the beach and fishermen mending nets alongside surfers waxing boards. Day trips to the nearby Paradise Valley, a stunning mountain oasis with natural swimming pools, and to the city of Agadir provide variety. The combination of consistent waves, warm water, affordable living, and Moroccan hospitality makes Taghazout the perfect surf destination.',
    images: [
      'https://images.unsplash.com/photo-1570698473651-b2de99bae12f?w=1200&q=80',
      'https://images.unsplash.com/photo-1553244886-a796b2e8e01f?w=1200&q=80',
      'https://images.unsplash.com/photo-1504233529578-6d46baba6d34?w=1200&q=80',
    ],
    rating: 4.7,
    reviewCount: 2345,
    highlights: [
      'Daily surf sessions at world-class Atlantic breaks',
      'Professional coaching with video analysis',
      'Comfortable surf house with ocean views',
      'Optional yoga sessions and cultural excursions',
      'All levels from complete beginner to advanced',
    ],
    included: [
      '6 nights accommodation in a surf house',
      'Daily surf coaching and guiding (5 sessions)',
      'Surf equipment rental (board and wetsuit)',
      'Daily breakfast and 5 dinners',
      'Video analysis sessions and yoga classes',
    ],
    notIncluded: [
      'Flights and airport transfers (can be arranged)',
      'Lunches and personal drinks',
      'Travel insurance and personal expenses',
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Welcome', description: 'Arrive at the surf house in Taghazout. Welcome session with surf coaches. Equipment fitting and surf spot orientation. Welcome dinner on the rooftop terrace.' },
      { day: 2, title: 'Surf Fundamentals', description: 'Morning surf session: ocean safety, paddling technique, and pop-up practice. Video review over lunch. Afternoon yoga session. Free evening in the village.' },
      { day: 3, title: 'Wave Selection', description: 'Morning session at a point break suitable for your level. Focus on wave reading and positioning. Afternoon free surf or Paradise Valley day trip option.' },
      { day: 4, title: 'Advanced Techniques', description: 'Morning coaching on turns, cutbacks, and speed generation. Video analysis session. Afternoon optional excursion to Agadir or free surfing.' },
      { day: 5, title: 'Surf Safari', description: 'Full-day surf safari to the best breaks along the coast based on conditions. Visit Anchor Point, Killer Point, or other premier spots. Packed lunch on the beach.' },
      { day: 6, title: 'Personal Development', description: 'Morning session focused on individual goals. Afternoon free surfing or relaxation. Final video review. Farewell dinner with the group.' },
      { day: 7, title: 'Departure', description: 'Optional sunrise surf session. Breakfast and checkout. Airport transfer available or extend your stay.' },
    ],
    meetingPoint: 'Taghazout Surf House (transfer from Agadir airport available)',
    startTime: 'Flexible check-in (Day 1)',
    difficulty: 'Easy to Moderate',
    tags: ['Surfing', 'Beach', 'Yoga', 'Taghazout', 'Water Sports'],
  },
]

function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug)
}

/* ================================================================
   STATIC PARAMS + METADATA
   ================================================================ */

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }))
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const tour = getTourBySlug(slug)
  if (!tour) return { title: 'Tour Not Found' }

  return {
    title: `${tour.name} | CityGuide Morocco Tours`,
    description: `Discover the ${tour.name}. ${tour.type} - ${tour.duration}. ${tour.price}. Rated ${tour.rating}/5 by ${tour.reviewCount.toLocaleString()} travelers. Includes highlights, itinerary, and tour details.`,
    openGraph: {
      title: `${tour.name} - Morocco Tour | CityGuide`,
      description: truncate(tour.description.split('\n\n')[0], 200),
      images: [
        {
          url: tour.images[0],
          width: 1200,
          height: 630,
          alt: tour.name,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tour.name} | CityGuide Morocco`,
      description: truncate(tour.description.split('\n\n')[0], 200),
      images: [tour.images[0]],
    },
    alternates: {
      canonical: `https://citytoursmorocco.com/tours/${tour.slug}`,
    },
  }
}

/* ================================================================
   HELPER: RENDER STARS
   ================================================================ */

function renderStars(rating: number) {
  const full = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.3
  const stars: React.ReactNode[] = []
  for (let i = 0; i < full; i++) {
    stars.push(<Star key={`f-${i}`} className="w-4 h-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />)
  }
  if (hasHalf) {
    stars.push(
      <span key="half" className="relative inline-block w-4 h-4">
        <Star className="absolute inset-0 w-4 h-4 text-[var(--color-accent)]" />
        <span className="absolute inset-0 w-1/2 overflow-hidden">
          <Star className="w-4 h-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
        </span>
      </span>
    )
  }
  const remaining = 5 - full - (hasHalf ? 1 : 0)
  for (let i = 0; i < remaining; i++) {
    stars.push(<Star key={`e-${i}`} className="w-4 h-4 text-[var(--color-accent)]/30" />)
  }
  return stars
}

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default async function TourDetailPage({ params }: PageProps) {
  const { slug } = await params
  const tour = getTourBySlug(slug)

  if (!tour) notFound()

  const paragraphs = tour.description.split('\n\n')

  /* -- JSON-LD Structured Data -- */

  const tourSchema = generateStructuredData('TouristTrip', {
    name: tour.name,
    description: paragraphs[0],
    image: tour.images,
    touristType: tour.type,
    offers: {
      '@type': 'Offer',
      price: tour.price,
      priceCurrency: 'MAD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: tour.rating,
      reviewCount: tour.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  })

  const breadcrumbSchema = generateStructuredData('BreadcrumbList', {
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
        name: 'Tours',
        item: 'https://citytoursmorocco.com/tours',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: tour.name,
        item: `https://citytoursmorocco.com/tours/${tour.slug}`,
      },
    ],
  })

  /* -- Determine related tours (same tags, different slug) -- */
  const relatedTours = tours
    .filter((t) => t.slug !== tour.slug && t.tags.some((tag) => tour.tags.includes(tag)))
    .slice(0, 3)

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ============================================================
          HERO SECTION
          ============================================================ */}
      <section
        className="relative w-full min-h-[60vh] lg:min-h-[70vh] flex items-end"
        style={{
          backgroundImage: `url(${tour.images[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-secondary)]" />

        <div className="relative z-10 w-full container-morocco pb-12 pt-32">
          {/* Type & Price badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-primary)]/90 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              <Tag className="w-3.5 h-3.5" />
              {tour.type}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-accent)]/90 text-white text-xs font-semibold backdrop-blur-sm">
              <DollarSign className="w-3.5 h-3.5" />
              {tour.price}
            </span>
          </div>

          {/* Tour name */}
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 tracking-tight leading-[1.1]">
            {tour.name}
          </h1>

          {/* Rating */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-1.5">
              {renderStars(tour.rating)}
              <span className="text-white font-semibold ml-1">{tour.rating.toFixed(1)}</span>
            </div>
            <span className="text-white/70 text-sm">
              {tour.reviewCount.toLocaleString()} reviews
            </span>
          </div>

          {/* Quick info pills */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 text-white text-xs font-medium backdrop-blur-sm">
              <Clock className="w-3.5 h-3.5" />
              {tour.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 text-white text-xs font-medium backdrop-blur-sm">
              <Users className="w-3.5 h-3.5" />
              {tour.groupSize}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 text-white text-xs font-medium backdrop-blur-sm">
              <Mountain className="w-3.5 h-3.5" />
              {tour.difficulty}
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================
          BREADCRUMB
          ============================================================ */}
      <nav aria-label="Breadcrumb" className="bg-[var(--surface-muted)] border-b border-[var(--border-light)]">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/" className="flex items-center gap-1 hover:text-[var(--color-primary)] transition-colors">
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li>
              <Link href="/tours" className="hover:text-[var(--color-primary)] transition-colors">
                Tours
              </Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li className="text-[var(--text-primary)] font-medium">{tour.name}</li>
          </ol>
        </div>
      </nav>

      {/* ============================================================
          IMAGE GALLERY
          ============================================================ */}
      <section className="bg-[var(--surface)]">
        <div className="container-morocco py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tour.images.map((img, i) => (
              <div key={i} className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <img
                  src={img}
                  alt={`${tour.name} - Photo ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {i === 0 && (
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs">
                    <Camera className="w-3.5 h-3.5" />
                    {tour.images.length} Photos
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          MAIN CONTENT + SIDEBAR
          ============================================================ */}
      <div className="bg-[var(--surface-muted)]">
        <div className="container-morocco py-10 lg:py-14">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">

            {/* -- MAIN CONTENT (~70%) -- */}
            <div className="w-full lg:w-[70%] space-y-12">

              {/* Description */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-primary)]/10">
                    <Eye className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)]">
                    Tour Overview
                  </h2>
                </div>
                <div className="zellige-border mb-6" />
                <div className="card-moroccan p-6 sm:p-8">
                  <div className="prose prose-lg max-w-none text-[var(--text-secondary)] leading-relaxed space-y-4">
                    {paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </section>

              {/* Highlights */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-primary)]/10">
                    <CheckCircle className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)]">
                    Tour Highlights
                  </h2>
                </div>
                <div className="zellige-border mb-6" />
                <div className="card-moroccan p-6 sm:p-8">
                  <ul className="space-y-4">
                    {tour.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                        <span className="text-[var(--text-secondary)] leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* What's Included / Not Included */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-secondary)]/10">
                    <Tag className="w-5 h-5 text-[var(--color-secondary)]" />
                  </div>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)]">
                    What&apos;s Included
                  </h2>
                </div>
                <div className="zellige-border mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Included */}
                  <div className="card-moroccan p-6">
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Included
                    </h3>
                    <ul className="space-y-3">
                      {tour.included.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Not Included */}
                  <div className="card-moroccan p-6">
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-500" />
                      Not Included
                    </h3>
                    <ul className="space-y-3">
                      {tour.notIncluded.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Day-by-Day Itinerary */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-accent)]/10">
                    <Calendar className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)]">
                    Day-by-Day Itinerary
                  </h2>
                </div>
                <div className="zellige-border mb-6" />
                <div className="space-y-4">
                  {tour.itinerary.map((day) => (
                    <div key={day.day} className="card-moroccan p-6 relative">
                      <div className="flex items-start gap-4">
                        {/* Day number circle */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-lg">
                          {day.day}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)] mb-2">
                            Day {day.day}: {day.title}
                          </h3>
                          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                            {day.description}
                          </p>
                        </div>
                      </div>
                      {/* Connector line */}
                      {day.day < tour.itinerary.length && (
                        <div className="absolute left-[2.95rem] top-[4.5rem] bottom-0 w-0.5 bg-[var(--color-primary)]/20 translate-x-[-50%]" />
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Tags */}
              <section>
                <div className="flex flex-wrap items-center gap-2">
                  {tour.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </section>

              {/* Related Tours */}
              {relatedTours.length > 0 && (
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-secondary)]/10">
                      <Compass className="w-5 h-5 text-[var(--color-secondary)]" />
                    </div>
                    <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)]">
                      Related Tours
                    </h2>
                  </div>
                  <div className="zellige-border mb-6" />
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {relatedTours.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/tours/${related.slug}`}
                        className="card-moroccan overflow-hidden group hover:shadow-xl transition-all duration-300"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img
                            src={related.images[0]}
                            alt={related.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute top-3 left-3">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-[var(--color-primary)]">
                              {related.type}
                            </span>
                          </div>
                          <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                            <Star className="w-3.5 h-3.5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                            <span className="text-white text-xs font-semibold">{related.rating}</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--color-primary)] transition-colors mb-1">
                            {related.name}
                          </h3>
                          <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {related.duration}
                            </span>
                            <span className="font-semibold text-[var(--color-primary)]">{related.price}</span>
                          </div>
                          <span className="text-xs text-[var(--color-primary)] flex items-center gap-1 mt-2">
                            View details <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* -- SIDEBAR (~30%) -- */}
            <aside className="w-full lg:w-[30%] space-y-6">

              {/* Info Card */}
              <div className="card-moroccan p-6 sticky top-24">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)] mb-2">
                  Tour Details
                </h3>

                {/* Price highlight */}
                <div className="bg-[var(--color-primary)]/10 rounded-lg p-4 mb-5">
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">Starting from</p>
                  <p className="text-2xl font-bold text-[var(--color-primary)]">{tour.price}</p>
                  <p className="text-xs text-[var(--text-muted)]">per person</p>
                </div>

                <div className="zellige-border mb-5" />

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">Duration</p>
                      <p className="text-sm text-[var(--text-primary)] font-semibold">{tour.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">Group Size</p>
                      <p className="text-sm text-[var(--text-primary)] font-semibold">{tour.groupSize}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mountain className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">Difficulty</p>
                      <p className="text-sm text-[var(--text-primary)] font-semibold">{tour.difficulty}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">Start Time</p>
                      <p className="text-sm text-[var(--text-primary)] font-semibold">{tour.startTime}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">Meeting Point</p>
                      <p className="text-sm text-[var(--text-primary)] font-semibold">{tour.meetingPoint}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">Rating</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        {renderStars(tour.rating)}
                        <span className="text-sm font-semibold text-[var(--text-primary)] ml-1">{tour.rating.toFixed(1)}</span>
                      </div>
                      <p className="text-xs text-[var(--text-muted)]">{tour.reviewCount.toLocaleString()} reviews</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6 pt-6 border-t border-[var(--border-light)] space-y-3">
                  <Link
                    href="/tools/planner"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-semibold text-sm hover:bg-[var(--color-primary)]/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <Compass className="w-4 h-4" />
                    Enquire About This Tour
                  </Link>
                  <Link
                    href="/tours"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--surface-muted)] text-[var(--text-primary)] font-semibold text-sm hover:bg-[var(--surface-muted)]/80 transition-all border border-[var(--border)]"
                  >
                    <ArrowRight className="w-4 h-4" />
                    View All Tours
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* ============================================================
          CTA SECTION
          ============================================================ */}
      <section className="gradient-moroccan py-16">
        <div className="container-morocco text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-white mb-4">
            Interested in {tour.name}?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Get in touch to learn more about this unforgettable {tour.type.toLowerCase()} experience. {tour.duration} of adventure, culture, and discovery await.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/tools/planner"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-white text-[var(--color-primary)] font-semibold text-sm hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Compass className="w-4 h-4" />
              Enquire About This Tour
            </Link>
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-white/15 text-white font-semibold text-sm hover:bg-white/25 transition-all backdrop-blur-sm border border-white/20"
            >
              <ArrowRight className="w-4 h-4" />
              Browse All Tours
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

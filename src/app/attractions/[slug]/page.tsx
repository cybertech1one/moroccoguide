import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  Star,
  MapPin,
  ChevronRight,
  Home,
  Clock,
  Ticket,
  Calendar,
  CheckCircle,
  Lightbulb,
  ArrowRight,
  Compass,
  Sun,
  Tag,
  Eye,
  Camera,
  Globe,
} from 'lucide-react'
import { generateStructuredData, truncate } from '@/lib/utils'

/* ================================================================
   ATTRACTION DATA
   ================================================================ */

interface NearbyAttraction {
  name: string
  slug: string
  image: string
}

interface Attraction {
  slug: string
  name: string
  city: string
  category: string
  description: string
  images: string[]
  rating: number
  reviewCount: number
  visitDuration: string
  bestTime: string
  entranceFee: string
  location: { lat: number; lng: number }
  highlights: string[]
  tips: string[]
  nearbyAttractions: NearbyAttraction[]
  openingHours: string
  tags: string[]
}

const attractions: Attraction[] = [
  {
    slug: 'jemaa-el-fnaa',
    name: 'Jemaa el-Fnaa',
    city: 'Marrakech',
    category: 'Market & Square',
    description:
      'Jemaa el-Fnaa is the vibrant, bustling main square at the heart of Marrakech and a UNESCO Masterpiece of the Oral and Intangible Heritage of Humanity. By day, the vast open space fills with orange juice sellers, henna artists, and snake charmers, creating a spectacle unlike any other in North Africa. As the sun sets, the square transforms into one of the greatest open-air dining experiences on the planet, with hundreds of food stalls sending plumes of fragrant smoke into the evening sky.\n\nThe history of Jemaa el-Fnaa stretches back to the founding of Marrakech in the 11th century, when it served as a gathering place for traders arriving by caravan from across the Sahara. Over the centuries, it has been a place of public assembly, commerce, storytelling, and entertainment. The name itself has been variously translated as "assembly of the dead" or "mosque at the end of the world," reflecting its long and layered past.\n\nToday, the square remains the beating heart of Marrakech, drawing both locals and visitors into its magnetic orbit. Acrobats, Gnawa musicians, and traditional Halqa storytellers perform nightly to captivated circles of onlookers. The surrounding souks radiate outward from the square like veins from a heart, offering a seemingly endless maze of spices, leather goods, textiles, and lanterns. Visiting Jemaa el-Fnaa is not just sightseeing; it is a full sensory immersion into the living culture of Morocco.\n\nFor the best experience, arrive in the late afternoon to watch the transformation from day market to night carnival. Grab a seat on one of the rooftop terraces of the surrounding cafes for panoramic views of the entire square as the call to prayer echoes from the nearby Koutoubia Mosque.',
    images: [
      '/images/hero-marrakech.webp',
      '/images/hero-morocco.webp',
      '/images/hero-spa.webp',
    ],
    rating: 4.7,
    reviewCount: 12453,
    visitDuration: '2-4 hours',
    bestTime: 'Late afternoon to evening',
    entranceFee: 'Free',
    location: { lat: 31.6258, lng: -7.9891 },
    highlights: [
      'UNESCO Masterpiece of Intangible Heritage',
      'Hundreds of food stalls at night with traditional Moroccan cuisine',
      'Live Gnawa music and Halqa storytelling circles',
      'Gateway to the labyrinthine Marrakech souks',
      'Rooftop cafe terraces with panoramic square views',
    ],
    tips: [
      'Keep your belongings secure and be aware of pickpockets in crowded areas.',
      'Negotiate prices before sitting down at food stalls or agreeing to photos with performers.',
      'Visit during Ramadan for a unique atmosphere when the square fills after iftar.',
    ],
    nearbyAttractions: [
      { name: 'Jardin Majorelle', slug: 'jardin-majorelle', image: '/images/hero-majorelle-garden.webp' },
      { name: 'Bahia Palace', slug: 'bahia-palace', image: '/images/hero-riad-interior.webp' },
      { name: 'El Badi Palace', slug: 'el-badi-palace', image: '/images/hero-marrakech.webp' },
    ],
    openingHours: 'Open 24 hours (most active 5 PM - midnight)',
    tags: ['UNESCO', 'Market', 'Nightlife', 'Street Food', 'Cultural'],
  },
  {
    slug: 'hassan-ii-mosque',
    name: 'Hassan II Mosque',
    city: 'Casablanca',
    category: 'Religious Monument',
    description:
      'The Hassan II Mosque is one of the largest mosques in the world and home to the tallest minaret on Earth, soaring 210 meters into the sky above the Atlantic Ocean. Completed in 1993 after seven years of construction involving over 10,000 artisans, this architectural masterpiece was designed by French architect Michel Pinseau and commissioned by King Hassan II. The mosque can accommodate 25,000 worshippers inside and an additional 80,000 in its vast outdoor courtyard.\n\nWhat makes this mosque truly extraordinary is its setting: it is built partially over the Atlantic Ocean, fulfilling a verse from the Quran that states God\'s throne was built upon water. The retractable roof opens to reveal the heavens, and the laser beam atop the minaret points toward Mecca, visible for miles across the ocean. The interior features heated marble floors, granite columns imported from Italy, and some of the finest zellige tilework, carved stucco, and painted cedar wood in all of Morocco.\n\nThe Hassan II Mosque is one of the very few mosques in Morocco open to non-Muslim visitors, making it an essential stop for anyone visiting Casablanca. Guided tours run throughout the day and provide fascinating insights into the construction techniques and the spiritual significance of every design element. The craftsmanship on display is breathtaking, from the massive bronze doors to the intricate geometric patterns that cover every surface.\n\nThe esplanade surrounding the mosque offers stunning views of the ocean and is a popular spot for locals to gather, particularly at sunset. The hammam in the lower level, decorated with the same extraordinary artistry as the prayer hall, is open to the public and offers a traditional bathing experience in a truly regal setting.',
    images: [
      '/images/hero-essaouira.webp',
      '/images/hero-marrakech.webp',
      '/images/hero-riad-interior.webp',
    ],
    rating: 4.8,
    reviewCount: 18721,
    visitDuration: '1.5-2 hours',
    bestTime: 'Morning for guided tours',
    entranceFee: '130 MAD',
    location: { lat: 33.6086, lng: -7.6322 },
    highlights: [
      'Tallest minaret in the world at 210 meters',
      'Built partially over the Atlantic Ocean',
      'Retractable roof revealing the sky above',
      'Open to non-Muslim visitors with guided tours',
      'Master craftsmanship with zellige, carved stucco, and painted cedar',
    ],
    tips: [
      'Dress modestly covering shoulders and knees; women should bring a headscarf.',
      'Book the first morning tour for smaller crowds and the best light for photography.',
      'Visit the hammam in the basement level for a unique traditional bathing experience.',
    ],
    nearbyAttractions: [
      { name: 'Kasbah of the Udayas', slug: 'kasbah-udayas', image: '/images/hero-marrakech.webp' },
      { name: 'Hassan Tower', slug: 'hassan-tower', image: '/images/hero-riad-interior.webp' },
      { name: 'Volubilis Roman Ruins', slug: 'volubilis', image: '/images/hero-water-sports.webp' },
    ],
    openingHours: 'Sat-Thu: 9:00 AM, 10:00 AM, 11:00 AM, 2:00 PM (guided tours only)',
    tags: ['Religious', 'Architecture', 'UNESCO', 'Iconic', 'Cultural'],
  },
  {
    slug: 'fes-medina',
    name: 'Fes el-Bali Medina',
    city: 'Fes',
    category: 'Medina & Heritage',
    description:
      'Fes el-Bali is the oldest walled part of Fes and is considered the largest car-free urban area in the world. This UNESCO World Heritage Site is a living medieval city with over 9,000 narrow alleyways, many of which are barely wide enough for a laden donkey to pass. Founded in the 9th century, it remains one of the best-preserved historic cities in the Arab-Muslim world, home to the University of al-Qarawiyyin, recognized as the oldest existing and continually operating educational institution in the world.\n\nWalking through the medina is like stepping into a time machine. The air is thick with the scent of cedarwood from carpenters\' workshops, the tang of leather from the famous tanneries, and the warm fragrance of spices piled high in the souk stalls. Every turn reveals another architectural wonder: ornate medieval fountains, towering minarets, elaborately tiled madrasas, and hidden riads with tranquil courtyards. The medina is divided into hundreds of neighborhoods, each with its own mosque, hammam, bakery, and fountain.\n\nThe Bou Inania Madrasa, with its extraordinary carved stucco and zellige tilework, is one of the finest examples of Marinid architecture. The Nejjarine Museum of Wooden Arts and Crafts occupies a beautifully restored fondouk near an ornate carved fountain. The Chouara Tannery, visible from surrounding leather shop terraces, presents a striking tableau of stone vats filled with vivid natural dyes where tanners work using methods unchanged for centuries.\n\nNavigating Fes el-Bali without a guide is both exhilarating and challenging. The medina was intentionally designed as a labyrinth to confuse invaders, and that quality remains fully intact. Hiring a licensed local guide is highly recommended for your first visit, not only for navigation but for the rich stories and cultural context they provide about this extraordinary living heritage site.',
    images: [
      '/images/hero-golf.webp',
      '/images/hero-souk-lamps.webp',
      '/images/hero-ait-benhaddou.webp',
    ],
    rating: 4.7,
    reviewCount: 14832,
    visitDuration: '4-6 hours',
    bestTime: 'Morning (9-11 AM) for cooler temperatures',
    entranceFee: 'Free (individual sites vary)',
    location: { lat: 34.0622, lng: -4.9735 },
    highlights: [
      'Largest car-free urban area in the world',
      'Home to the oldest university (al-Qarawiyyin, founded 859 AD)',
      'Over 9,000 winding alleyways and medieval architecture',
      'Bou Inania Madrasa with exquisite Marinid decoration',
      'Traditional artisan workshops practicing centuries-old crafts',
    ],
    tips: [
      'Hire a licensed guide for your first visit to navigate the labyrinthine streets.',
      'Wear comfortable closed-toe shoes as the cobblestone streets can be slippery.',
      'Visit early morning for the best light and fewer crowds in the souks.',
    ],
    nearbyAttractions: [
      { name: 'Chouara Tannery', slug: 'chouara-tannery', image: '/images/hero-souk-lamps.webp' },
      { name: 'Volubilis Roman Ruins', slug: 'volubilis', image: '/images/hero-water-sports.webp' },
      { name: 'Blue Medina, Chefchaouen', slug: 'chefchaouen-medina', image: '/images/hero-fes.webp' },
    ],
    openingHours: 'Always accessible (individual sites have own hours)',
    tags: ['UNESCO', 'Medina', 'Historic', 'Artisan', 'Cultural'],
  },
  {
    slug: 'ait-ben-haddou',
    name: 'Ait Ben Haddou',
    city: 'Ouarzazate',
    category: 'UNESCO Heritage & Kasbah',
    description:
      'Ait Ben Haddou is a striking example of a traditional pre-Saharan habitat and one of Morocco\'s most iconic UNESCO World Heritage Sites. This fortified village, or ksar, is a collection of earthen buildings surrounded by high walls, a type of traditional architecture found throughout southern Morocco. The ensemble of buildings clustered together within the defensive walls creates a dramatic silhouette against the arid landscape of the Ounila Valley.\n\nThe ksar dates back to the 11th century and was once a key stop along the trans-Saharan trade route connecting Marrakech to the Sahara and sub-Saharan Africa. Caravans carrying gold, salt, and spices would pass through, and the wealthy merchants who controlled the trade built increasingly elaborate kasbahs with turrets, decorative motifs, and ornate corner towers. The rammed-earth construction technique, using a mixture of clay, straw, and water, gives the buildings their characteristic warm ochre color.\n\nAit Ben Haddou has served as a filming location for numerous Hollywood productions, including Lawrence of Arabia, Gladiator, Game of Thrones, and The Mummy. The photogenic quality of the ksar is undeniable, with its terraced buildings rising up the hillside, the reflections in the river below, and the vast empty desert stretching beyond. A small community of families still lives within the walls, maintaining the structures and welcoming visitors.\n\nThe climb to the top of the ksar rewards visitors with a sweeping 360-degree panorama of the surrounding desert plains, the snowy Atlas Mountains in the distance, and the modern village across the river. The morning light is particularly spectacular, casting long shadows across the earthen walls and illuminating the intricate geometric carvings that adorn the tower tops.',
    images: [
      '/images/hero-desert.webp',
      '/images/hero-water-sports.webp',
      '/images/hero-marrakech-koutoubia.webp',
    ],
    rating: 4.6,
    reviewCount: 9876,
    visitDuration: '2-3 hours',
    bestTime: 'Early morning or late afternoon for golden light',
    entranceFee: '10 MAD',
    location: { lat: 31.0470, lng: -7.1299 },
    highlights: [
      'UNESCO World Heritage Site since 1987',
      'Filming location for Gladiator, Game of Thrones, and more',
      'Stunning rammed-earth architecture dating to the 11th century',
      '360-degree panorama from the hilltop granary',
      'Traditional Berber village life still active within the walls',
    ],
    tips: [
      'Bring sun protection and water as there is little shade on the walk up.',
      'Cross the river using the stepping stones or the modern bridge upstream.',
      'Hire a local guide at the entrance for fascinating stories about the filming history.',
    ],
    nearbyAttractions: [
      { name: 'Todra Gorge', slug: 'todra-gorge', image: '/images/hero-marrakech-koutoubia.webp' },
      { name: 'Erg Chebbi Dunes', slug: 'erg-chebbi', image: '/images/hero-desert.webp' },
      { name: 'Ouzoud Waterfalls', slug: 'ouzoud-falls', image: '/images/hero-jemaa-elfna-night.webp' },
    ],
    openingHours: 'Daily: 8:00 AM - 6:00 PM',
    tags: ['UNESCO', 'Kasbah', 'Film Location', 'Desert', 'Historic'],
  },
  {
    slug: 'jardin-majorelle',
    name: 'Jardin Majorelle',
    city: 'Marrakech',
    category: 'Garden & Museum',
    description:
      'Jardin Majorelle is one of the most visited sites in Morocco, a botanical garden and artist\'s landscape garden of nearly two acres in the heart of Marrakech. Created by French Orientalist artist Jacques Majorelle in 1923, the garden took forty years of devoted passion to complete. It was later purchased and lovingly restored by fashion designer Yves Saint Laurent and his partner Pierre Berge in 1980, who saved it from being converted into a hotel complex.\n\nThe garden is instantly recognizable for its striking cobalt blue buildings, a shade now known worldwide as "Majorelle Blue." This vivid ultramarine contrasts dramatically with the lush greens of bamboo groves, the bright yellows of terracotta pots, and the shocking pink of bougainvillea cascading over walls. The garden houses over 300 species of plants from five continents, including towering cacti, ancient palm trees, lotus-covered pools, and dense tropical foliage.\n\nWithin the garden, the Berber Museum (Musee Berbere) occupies Majorelle\'s former studio and houses an extraordinary collection of over 600 artifacts documenting the rich culture of Morocco\'s indigenous Amazigh people. Jewelry, textiles, ceramics, and traditional costumes from across Morocco\'s diverse regions are displayed with museum-quality presentation. The adjacent Yves Saint Laurent Museum, opened in 2017, celebrates the designer\'s work and his deep connection to Marrakech through rotating exhibitions.\n\nThe garden provides a serene escape from the intensity of the nearby medina. Narrow pathways wind through dense plantings, past fountains and reflecting pools alive with goldfish, under canopies of palm and bamboo that filter the harsh Moroccan sun into dappled shade. Every corner reveals a new composition of color and form, making it a paradise for photographers and plant enthusiasts alike.',
    images: [
      '/images/hero-majorelle-garden.webp',
      '/images/hero-marrakech.webp',
      '/images/hero-riad-interior.webp',
    ],
    rating: 4.6,
    reviewCount: 21345,
    visitDuration: '1.5-2.5 hours',
    bestTime: 'Early morning (8 AM opening) to avoid crowds',
    entranceFee: '70 MAD (garden) + 30 MAD (museum)',
    location: { lat: 31.6417, lng: -8.0033 },
    highlights: [
      'Iconic Majorelle Blue buildings by artist Jacques Majorelle',
      'Over 300 plant species from five continents',
      'Berber Museum with 600+ indigenous Amazigh artifacts',
      'Adjacent Yves Saint Laurent Museum',
      'Tranquil oasis with reflecting pools and bamboo groves',
    ],
    tips: [
      'Arrive right at opening time (8 AM) to enjoy the garden with minimal crowds.',
      'Buy a combined ticket for the garden, Berber Museum, and YSL Museum.',
      'The on-site cafe serves excellent freshly squeezed juices and light meals.',
    ],
    nearbyAttractions: [
      { name: 'Jemaa el-Fnaa', slug: 'jemaa-el-fnaa', image: '/images/hero-marrakech.webp' },
      { name: 'Bahia Palace', slug: 'bahia-palace', image: '/images/hero-riad-interior.webp' },
      { name: 'El Badi Palace', slug: 'el-badi-palace', image: '/images/hero-marrakech.webp' },
    ],
    openingHours: 'Daily: 8:00 AM - 6:30 PM (5:30 PM in winter)',
    tags: ['Garden', 'Museum', 'Art', 'Photography', 'YSL'],
  },
  {
    slug: 'bahia-palace',
    name: 'Bahia Palace',
    city: 'Marrakech',
    category: 'Palace & Architecture',
    description:
      'The Bahia Palace is a masterpiece of Moroccan and Islamic architecture, built in the late 19th century for Si Moussa, the grand vizier of Sultan Hassan I, and later expanded by his son Ba Ahmed. The name "Bahia" means "brilliance," and the palace lives up to its name with an extraordinary display of painted ceilings, carved stucco, zellige mosaic floors, and meticulously crafted wooden screens. Spread over eight hectares, it was designed to capture the essence of Islamic and Moroccan architectural styles of the era.\n\nThe palace is a labyrinthine complex of over 150 rooms organized around a series of courtyards and gardens. The Grand Courtyard, paved in Italian marble and surrounded by delicately carved galleries, is the centerpiece of the complex. The private apartments of the four wives of Ba Ahmed each feature unique decorative schemes, showcasing the extraordinary range of Moroccan artisan traditions. The Council Chamber, with its soaring painted cedar ceiling, is perhaps the single most impressive room in the palace.\n\nWhat makes the Bahia Palace particularly fascinating is that it was built at ground level, without an upper floor, so that Ba Ahmed\'s elderly father could access every room. This design choice gives the palace a uniquely human scale that contrasts with the grandeur of its decoration. The extensive gardens, planted with fruit trees, jasmine, and bougainvillea, provide fragrant outdoor spaces that complement the ornate interiors.\n\nThe palace saw significant changes throughout its history. When Ba Ahmed died in 1900, Sultan Abdelaziz reportedly had the palace looted of its furnishings. The French Protectorate later used it as the residence of the French Governor General. Today, it serves as a cultural site and occasional venue for exhibitions, with a significant portion of its rooms open to public viewing.',
    images: [
      '/images/hero-riad-interior.webp',
      '/images/hero-marrakech.webp',
      '/images/hero-majorelle-garden.webp',
    ],
    rating: 4.5,
    reviewCount: 11287,
    visitDuration: '1-2 hours',
    bestTime: 'Morning for best natural light in courtyards',
    entranceFee: '70 MAD',
    location: { lat: 31.6215, lng: -7.9832 },
    highlights: [
      'Over 150 lavishly decorated rooms and courtyards',
      'Extraordinary painted cedar ceilings and zellige tilework',
      'Eight-hectare grounds with fragrant gardens',
      'Grand marble courtyard with carved galleries',
      'Rich history spanning viziers, sultans, and the French Protectorate',
    ],
    tips: [
      'Visit early morning or late afternoon when the light streams through the courtyard arches.',
      'Look up at every ceiling; the painted woodwork is the most remarkable feature.',
      'Combine your visit with the nearby El Badi Palace and Saadian Tombs.',
    ],
    nearbyAttractions: [
      { name: 'Jemaa el-Fnaa', slug: 'jemaa-el-fnaa', image: '/images/hero-marrakech.webp' },
      { name: 'El Badi Palace', slug: 'el-badi-palace', image: '/images/hero-marrakech.webp' },
      { name: 'Jardin Majorelle', slug: 'jardin-majorelle', image: '/images/hero-majorelle-garden.webp' },
    ],
    openingHours: 'Daily: 9:00 AM - 5:00 PM',
    tags: ['Palace', 'Architecture', 'Historic', 'Cultural', 'Art'],
  },
  {
    slug: 'volubilis',
    name: 'Volubilis Roman Ruins',
    city: 'Meknes',
    category: 'Archaeological Ruins',
    description:
      'Volubilis is the best-preserved Roman archaeological site in North Africa and a UNESCO World Heritage Site situated in a fertile agricultural region near the city of Meknes. Founded in the 3rd century BC as a Phoenician and later Carthaginian settlement, it became an important outpost of the Roman Empire and the capital of the province of Mauretania Tingitana. At its peak, the city was home to around 20,000 people and served as a vital center for olive oil production and grain export.\n\nThe ruins are remarkably well preserved, with major structures including the Triumphal Arch of Caracalla, the Basilica, the Capitol temple, and numerous grand houses with their original mosaic floors still intact. The mosaics are the true treasures of Volubilis, depicting mythological scenes, marine life, and abstract geometric patterns in vivid colors that have survived nearly two millennia. The House of Orpheus, the House of the Cortege of Venus, and the House of the Labours of Hercules contain particularly spectacular examples.\n\nThe setting of Volubilis adds immensely to its appeal. The ruins sit on a gently sloping plateau overlooking a patchwork of wheat fields, olive groves, and wildflower meadows, with the holy city of Moulay Idriss visible on a neighboring hilltop. In spring, the site is carpeted with poppies and wild irises, and storks nest atop the ancient columns. The combination of Roman grandeur and Moroccan landscape creates a uniquely evocative atmosphere.\n\nUnlike many archaeological sites, Volubilis has relatively few barriers, allowing visitors to walk among and even into the ancient structures. The on-site museum provides excellent context with artifacts found during excavations, including bronze statues, jewelry, and oil lamps. The site can be comfortably visited as a day trip from Meknes or Fes, and is often combined with a visit to the pilgrimage town of Moulay Idriss.',
    images: [
      '/images/hero-water-sports.webp',
      '/images/hero-marrakech-koutoubia.webp',
      '/images/hero-golf.webp',
    ],
    rating: 4.5,
    reviewCount: 7654,
    visitDuration: '2-3 hours',
    bestTime: 'Spring (March-May) for wildflowers',
    entranceFee: '70 MAD',
    location: { lat: 34.0725, lng: -5.5547 },
    highlights: [
      'Best-preserved Roman ruins in North Africa',
      'Stunning mosaic floors depicting mythological scenes',
      'Triumphal Arch of Caracalla and the Basilica',
      'Spring wildflowers and storks nesting on columns',
      'UNESCO World Heritage Site with open-access exploration',
    ],
    tips: [
      'Bring a hat and water; there is virtually no shade among the ruins.',
      'Visit in spring for the most photogenic combination of flowers and ancient stone.',
      'Combine your trip with the nearby pilgrimage town of Moulay Idriss.',
    ],
    nearbyAttractions: [
      { name: 'Fes el-Bali Medina', slug: 'fes-medina', image: '/images/hero-golf.webp' },
      { name: 'Chouara Tannery', slug: 'chouara-tannery', image: '/images/hero-souk-lamps.webp' },
      { name: 'Hassan Tower', slug: 'hassan-tower', image: '/images/hero-riad-interior.webp' },
    ],
    openingHours: 'Daily: 8:30 AM - 6:00 PM (winter until sunset)',
    tags: ['UNESCO', 'Roman', 'Archaeological', 'Historic', 'Mosaics'],
  },
  {
    slug: 'todra-gorge',
    name: 'Todra Gorge',
    city: 'Tinghir',
    category: 'Natural Wonder',
    description:
      'Todra Gorge is a spectacular canyon carved through the eastern edge of the High Atlas Mountains by the Todra River, creating sheer limestone walls that rise up to 300 meters on either side of a narrow passage barely 10 meters wide at its most dramatic point. Located near the town of Tinghir, this natural wonder is one of Morocco\'s most impressive geological formations and a world-renowned destination for rock climbing, hiking, and photography.\n\nThe gorge stretches for approximately 40 kilometers, but the most spectacular section is the final 600 meters where the canyon narrows dramatically and the cliffs tower vertically overhead. The rock faces change color throughout the day, shifting from pale pink in the morning light to deep orange and red as the sun moves across the sky. A small river runs through the bottom of the gorge, its clear waters reflecting the towering walls above and providing a cool microclimate even in the heat of summer.\n\nThe area around Todra Gorge is home to Amazigh Berber communities who have inhabited the Todra Valley for centuries. The lush palmeries that line the river upstream from the gorge create a striking contrast with the barren rocky landscape, forming a green ribbon of date palms, almond trees, and vegetable gardens sustained by ancient irrigation channels called khettaras. Several small villages dot the valley, offering glimpses into traditional Berber agricultural life.\n\nRock climbers from around the world are drawn to Todra Gorge for its hundreds of bolted sport climbing routes ranging from easy to extremely difficult. The rock quality is excellent, with features including steep overhangs, crimps, tufas, and pockets. Even non-climbers can enjoy the spectacle of watching colorful figures ascending the massive cliff faces. The best time to visit is spring or autumn when temperatures are comfortable for both hiking and climbing.',
    images: [
      '/images/hero-marrakech-koutoubia.webp',
      '/images/hero-water-sports.webp',
      '/images/hero-desert.webp',
    ],
    rating: 4.6,
    reviewCount: 6543,
    visitDuration: '2-4 hours',
    bestTime: 'Spring (March-May) or Autumn (Sept-Nov)',
    entranceFee: 'Free',
    location: { lat: 31.5889, lng: -5.5714 },
    highlights: [
      'Towering 300-meter limestone cliffs narrowing to just 10 meters',
      'World-class rock climbing with hundreds of sport routes',
      'Dramatic color changes in the rock throughout the day',
      'Lush Berber palmeries and traditional villages nearby',
      'Refreshing river running through the gorge floor',
    ],
    tips: [
      'Arrive early morning for the best light and to have the narrow section to yourself.',
      'Wear sturdy shoes as the riverbed stones can be slippery.',
      'The small cafes at the gorge entrance serve excellent tagine and mint tea.',
    ],
    nearbyAttractions: [
      { name: 'Erg Chebbi Dunes', slug: 'erg-chebbi', image: '/images/hero-desert.webp' },
      { name: 'Ait Ben Haddou', slug: 'ait-ben-haddou', image: '/images/hero-desert.webp' },
      { name: 'Ouzoud Waterfalls', slug: 'ouzoud-falls', image: '/images/hero-jemaa-elfna-night.webp' },
    ],
    openingHours: 'Always accessible',
    tags: ['Nature', 'Rock Climbing', 'Canyon', 'Photography', 'Adventure'],
  },
  {
    slug: 'erg-chebbi',
    name: 'Erg Chebbi Dunes',
    city: 'Merzouga',
    category: 'Natural Wonder & Desert',
    description:
      'Erg Chebbi is Morocco\'s highest and most spectacular sand sea, a vast expanse of wind-sculpted dunes rising up to 150 meters above the rocky desert floor near the small village of Merzouga. These towering dunes, which glow with shades of gold, orange, and pink depending on the time of day, represent the quintessential Saharan landscape that draws thousands of visitors each year to experience the magic of the desert.\n\nThe dune field stretches approximately 22 kilometers from north to south and 5 kilometers from east to west, covering an area of over 50 square kilometers. The formation of Erg Chebbi began millions of years ago through the gradual accumulation of windblown sand, and the dunes continue to shift and reshape with the prevailing winds. The surrounding landscape is a flat, rock-strewn hamada desert, making the sudden rise of the golden dunes all the more dramatic and otherworldly.\n\nA camel trek into the dunes at sunset, followed by a night in a traditional Berber desert camp, is one of Morocco\'s most iconic travel experiences. As the sun descends, the dunes ignite in an extraordinary palette of amber, crimson, and violet. After a traditional tagine dinner cooked over an open fire, Berber musicians play haunting Gnawa rhythms beneath a canopy of stars so bright and numerous that the Milky Way casts visible shadows on the sand. The silence of the deep desert, broken only by the whisper of shifting sand, is profoundly peaceful.\n\nBeyond the classic camel trek, Erg Chebbi offers opportunities for sandboarding, quad biking, and 4x4 excursions to remote Berber villages and seasonal salt lakes (known as dayas) that attract flamingos after winter rains. The nearby village of Khamlia is home to the Gnawa people, descendants of sub-Saharan Africans, who welcome visitors with extraordinary musical performances. The region also hosts the annual Desert Music Festival, drawing international performers and visitors.',
    images: [
      '/images/hero-desert.webp',
      '/images/hero-desert.webp',
      '/images/hero-marrakech-koutoubia.webp',
    ],
    rating: 4.8,
    reviewCount: 11234,
    visitDuration: '1-2 days',
    bestTime: 'October to April (avoid summer heat)',
    entranceFee: 'Free (guided tours vary)',
    location: { lat: 31.1497, lng: -3.9654 },
    highlights: [
      'Morocco\'s tallest sand dunes reaching 150 meters high',
      'Unforgettable camel treks and desert camp overnight stays',
      'Spectacular sunrise and sunset over the golden Sahara',
      'Gnawa music performances in nearby Khamlia village',
      'Stargazing under some of the darkest skies on Earth',
    ],
    tips: [
      'Book an overnight desert camp rather than a day trip to fully experience the dunes.',
      'Bring warm layers; desert nights can drop below 5 degrees Celsius even in spring.',
      'Protect your camera gear from fine sand; keep it sealed when not shooting.',
    ],
    nearbyAttractions: [
      { name: 'Todra Gorge', slug: 'todra-gorge', image: '/images/hero-marrakech-koutoubia.webp' },
      { name: 'Ait Ben Haddou', slug: 'ait-ben-haddou', image: '/images/hero-desert.webp' },
      { name: 'Fes el-Bali Medina', slug: 'fes-medina', image: '/images/hero-golf.webp' },
    ],
    openingHours: 'Always accessible',
    tags: ['Desert', 'Sahara', 'Nature', 'Camel Trek', 'Stargazing'],
  },
  {
    slug: 'chefchaouen-medina',
    name: 'Blue Medina',
    city: 'Chefchaouen',
    category: 'Medina & Photography',
    description:
      'The Blue Medina of Chefchaouen is one of Morocco\'s most photographed destinations, a dreamlike hillside town where virtually every building, alleyway, doorway, and staircase is painted in varying shades of blue. Nestled in the Rif Mountains of northern Morocco, this enchanting small city has become an icon of Moroccan travel, attracting photographers, artists, and travelers seeking its uniquely serene atmosphere.\n\nThe origin of the blue-washing tradition is debated. Some attribute it to Jewish refugees who settled in Chefchaouen in the 1930s and painted their quarter blue to symbolize the sky and heaven. Others suggest the blue repels mosquitoes or keeps buildings cool in summer. Whatever its origin, the practice has been enthusiastically adopted throughout the medina, creating a cohesive blue world that ranges from powder blue to deep cobalt, accented by terracotta pots overflowing with colorful flowers and bright laundry drying on rooftop lines.\n\nThe medina itself is a compact, pedestrian-friendly maze of narrow streets radiating from the central Place Outa el-Hammam, where the 15th-century Grand Mosque and a small kasbah museum overlook a lively square filled with cafe terraces. Unlike the overwhelming scale of Fes or Marrakech, Chefchaouen\'s medina feels intimate and manageable, making it ideal for leisurely wandering without a guide. The local handicrafts are distinctive, particularly woven blankets, goat cheese, and the Rif region\'s aromatic herbs.\n\nBeyond the blue streets, Chefchaouen offers excellent hiking in the surrounding Talassemtane National Park, including trails to the nearby Akchour Waterfalls and a natural rock bridge formation called the Bridge of God. The town\'s relaxed pace, mountain air, and artistic ambiance make it a favorite spot for travelers to slow down, recharge, and simply enjoy the beauty of a place that feels almost too picturesque to be real.',
    images: [
      '/images/hero-fes.webp',
      '/images/hero-souk-lamps.webp',
      '/images/hero-ait-benhaddou.webp',
    ],
    rating: 4.7,
    reviewCount: 10876,
    visitDuration: '3-5 hours',
    bestTime: 'Spring (April-May) or Autumn (Sept-Oct)',
    entranceFee: 'Free',
    location: { lat: 35.1688, lng: -5.2636 },
    highlights: [
      'Entire medina painted in mesmerizing shades of blue',
      'Intimate, walkable streets ideal for photography',
      'Place Outa el-Hammam with 15th-century Grand Mosque',
      'Surrounding Rif Mountain hiking and waterfalls',
      'Distinctive local crafts including woven blankets and mountain herbs',
    ],
    tips: [
      'Visit early morning for empty blue streets and the best photography light.',
      'Ask permission before photographing residents; some may request a small tip.',
      'Stay overnight to experience the magical blue streets at dawn and dusk without day-trippers.',
    ],
    nearbyAttractions: [
      { name: 'Fes el-Bali Medina', slug: 'fes-medina', image: '/images/hero-golf.webp' },
      { name: 'Volubilis Roman Ruins', slug: 'volubilis', image: '/images/hero-water-sports.webp' },
      { name: 'Chouara Tannery', slug: 'chouara-tannery', image: '/images/hero-souk-lamps.webp' },
    ],
    openingHours: 'Always accessible',
    tags: ['Photography', 'Blue City', 'Medina', 'Mountains', 'Artisan'],
  },
  {
    slug: 'ouzoud-falls',
    name: 'Ouzoud Waterfalls',
    city: 'Azilal',
    category: 'Natural Wonder',
    description:
      'The Ouzoud Waterfalls are the highest and most spectacular waterfalls in North Africa, cascading 110 meters over three tiers of red cliffs into a series of turquoise pools and a river canyon lush with olive groves and fig trees. Located in the Middle Atlas Mountains about 150 kilometers northeast of Marrakech, the falls are one of Morocco\'s most popular natural attractions and a refreshing escape from the heat of the lowland cities.\n\nThe name "Ouzoud" comes from the Amazigh Berber word for olive trees, which grow abundantly on the terraced hillsides surrounding the falls. Multiple cascades pour over the cliff edge, creating a constant mist that nourishes a micro-ecosystem of lush vegetation, including wild fig trees, carob, and an array of colorful wildflowers. The rainbow that perpetually hangs in the mist of the main cascade is a photographer\'s dream.\n\nOne of the delights of visiting Ouzoud is the colony of Barbary macaques that inhabit the cliffs and trees around the falls. These charismatic monkeys, which are the only wild primates in Africa north of the Sahara, swing through the branches and scramble along the cliff faces, often approaching visitors with curiosity. The monkeys are wild and should not be fed, but they provide endless entertainment and photo opportunities.\n\nA network of well-maintained trails leads visitors down to the base of the falls, where small boats can take you across the pool for a spectacular view looking straight up at the cascading water. Local families run small cafes and restaurants along the trails, serving grilled meats, tagines, and freshly squeezed orange juice with views of the falls. Swimming in the natural pools at the base is possible during warmer months and provides a wonderfully refreshing experience after the hike.',
    images: [
      '/images/hero-jemaa-elfna-night.webp',
      '/images/hero-marrakech-koutoubia.webp',
      '/images/hero-water-sports.webp',
    ],
    rating: 4.5,
    reviewCount: 8765,
    visitDuration: '3-4 hours',
    bestTime: 'Spring (March-May) for fullest water flow',
    entranceFee: '20 MAD',
    location: { lat: 32.0155, lng: -6.7172 },
    highlights: [
      'Tallest waterfalls in North Africa at 110 meters',
      'Three-tiered cascade into turquoise natural pools',
      'Wild Barbary macaque monkeys in the surrounding trees',
      'Boat rides to the base of the falls',
      'Swimming in natural pools during warmer months',
    ],
    tips: [
      'Wear shoes with good grip as the trails near the falls can be wet and slippery.',
      'Do not feed the Barbary macaques; it harms their health and natural behavior.',
      'Visit on a weekday to avoid the weekend crowds from Marrakech.',
    ],
    nearbyAttractions: [
      { name: 'Jemaa el-Fnaa', slug: 'jemaa-el-fnaa', image: '/images/hero-marrakech.webp' },
      { name: 'Ait Ben Haddou', slug: 'ait-ben-haddou', image: '/images/hero-desert.webp' },
      { name: 'Todra Gorge', slug: 'todra-gorge', image: '/images/hero-marrakech-koutoubia.webp' },
    ],
    openingHours: 'Always accessible',
    tags: ['Nature', 'Waterfall', 'Hiking', 'Wildlife', 'Swimming'],
  },
  {
    slug: 'kasbah-udayas',
    name: 'Kasbah of the Udayas',
    city: 'Rabat',
    category: 'Historic Fortress',
    description:
      'The Kasbah of the Udayas is a fortified citadel perched dramatically at the mouth of the Bou Regreg River in Morocco\'s capital city, Rabat. Part of the UNESCO World Heritage inscription of Rabat as a Modern Capital and Historic City, this 12th-century fortress offers one of the most atmospheric experiences in Morocco, combining Almohad military architecture, Andalusian gardens, whitewashed streets, and sweeping ocean views into a compact and enchanting enclave.\n\nThe monumental gateway, Bab Oudaia, is considered one of the masterpieces of Almohad architecture. Built in the 1190s by Sultan Yacoub el-Mansour, the ornate horseshoe arch is decorated with intricate carved stone patterns that exemplify the peak of Almohad artistic achievement. Beyond the gate, narrow streets lined with blue-and-white houses reminiscent of a Greek island lead through the residential quarter, where families have lived for generations and cats doze in sunny doorways.\n\nThe highlight of the kasbah is the enchanting Andalusian Gardens, a peaceful oasis of neatly clipped hedges, flowering orange and lemon trees, fragrant jasmine, and gurgling fountains. Created during the French colonial period in the Andalusian style, the gardens offer a tranquil retreat from the bustle of the city below. The terrace overlooking the river mouth and the Atlantic provides one of the most spectacular viewpoints in Rabat, particularly at sunset.\n\nThe kasbah also houses the Museum of Oudaia, set in a 17th-century palace built by Moulay Ismail, displaying traditional Moroccan arts including jewelry, textiles, ceramics, and musical instruments. The surrounding Cafe Maure, with its terrace overlooking the river and ocean, is the perfect spot to sip mint tea and almond-milk pastries while watching the fishing boats and surfers navigating the river mouth below.',
    images: [
      '/images/hero-marrakech.webp',
      '/images/hero-riad-interior.webp',
      '/images/hero-golf.webp',
    ],
    rating: 4.5,
    reviewCount: 7892,
    visitDuration: '1.5-2.5 hours',
    bestTime: 'Late afternoon for sunset views',
    entranceFee: 'Free (museum: 10 MAD)',
    location: { lat: 34.0329, lng: -6.8394 },
    highlights: [
      'Monumental Bab Oudaia gate, a masterpiece of Almohad architecture',
      'Enchanting Andalusian Gardens with citrus trees and fountains',
      'Panoramic views over the Atlantic and Bou Regreg River',
      'Blue-and-white washed streets within the fortified walls',
      'Cafe Maure terrace for mint tea with ocean views',
    ],
    tips: [
      'Visit at sunset for the most magical light on the whitewashed walls and ocean views.',
      'The Cafe Maure at the river edge is a must-stop for mint tea and Moroccan pastries.',
      'Combine your visit with the nearby Hassan Tower and Mausoleum of Mohammed V.',
    ],
    nearbyAttractions: [
      { name: 'Hassan Tower', slug: 'hassan-tower', image: '/images/hero-riad-interior.webp' },
      { name: 'Hassan II Mosque', slug: 'hassan-ii-mosque', image: '/images/hero-essaouira.webp' },
      { name: 'Volubilis Roman Ruins', slug: 'volubilis', image: '/images/hero-water-sports.webp' },
    ],
    openingHours: 'Daily: 8:00 AM - 6:30 PM',
    tags: ['UNESCO', 'Fortress', 'Garden', 'Historic', 'Viewpoint'],
  },
  {
    slug: 'hassan-tower',
    name: 'Hassan Tower',
    city: 'Rabat',
    category: 'Historic Monument',
    description:
      'The Hassan Tower is the incomplete minaret of a mosque that was intended to be the largest in the world when construction began in 1195 under the Almohad Caliph Yacoub al-Mansour. Standing at 44 meters, approximately half its intended height, the tower remains one of the most iconic symbols of Rabat and a masterpiece of Almohad architecture. The same ruler also commissioned the Koutoubia in Marrakech and the Giralda in Seville, and the Hassan Tower shares their distinctive red sandstone construction and geometric decorative motifs.\n\nWhen al-Mansour died in 1199, construction ceased, and the mosque was never completed. The 1755 Lisbon earthquake further destroyed much of what remained, leaving behind the tower and a field of 200 columns that mark where the massive prayer hall once stood. These weathered stone columns, arranged in perfect rows across the stone platform, create a haunting and photogenic landscape that speaks to the ambition and impermanence of human endeavor.\n\nAdjacent to the tower sits the Mausoleum of Mohammed V, a stunning 20th-century monument in white marble and green tile that houses the tombs of King Mohammed V and his two sons, King Hassan II and Prince Abdallah. The mausoleum\'s interior is lavishly decorated with zellige tilework, carved marble, and a magnificent chandelier, and royal guards in traditional dress stand at the entrance. The contrast between the unfinished medieval tower and the immaculate modern mausoleum creates a fascinating architectural dialogue.\n\nThe esplanade surrounding the tower and mausoleum is one of Rabat\'s most important public spaces, used for official ceremonies and daily leisure. The elevated position offers views across the Bou Regreg River to the Sale medina, and the entire complex is beautifully illuminated at night. The site is free to enter and is one of the most visited monuments in Morocco.',
    images: [
      '/images/hero-riad-interior.webp',
      '/images/hero-marrakech.webp',
      '/images/hero-golf.webp',
    ],
    rating: 4.4,
    reviewCount: 8234,
    visitDuration: '1-1.5 hours',
    bestTime: 'Morning or late afternoon for best light',
    entranceFee: 'Free',
    location: { lat: 34.0242, lng: -6.8232 },
    highlights: [
      'Iconic unfinished 12th-century Almohad minaret',
      '200 weathered stone columns marking the unbuilt prayer hall',
      'Mausoleum of Mohammed V with exquisite marble and zellige',
      'Royal guards in traditional ceremonial dress',
      'Panoramic views across the Bou Regreg River to Sale',
    ],
    tips: [
      'Visit early morning to photograph the columns without crowds.',
      'Dress modestly when entering the Mausoleum of Mohammed V.',
      'The site is particularly atmospheric when illuminated at night.',
    ],
    nearbyAttractions: [
      { name: 'Kasbah of the Udayas', slug: 'kasbah-udayas', image: '/images/hero-marrakech.webp' },
      { name: 'Hassan II Mosque', slug: 'hassan-ii-mosque', image: '/images/hero-essaouira.webp' },
      { name: 'Volubilis Roman Ruins', slug: 'volubilis', image: '/images/hero-water-sports.webp' },
    ],
    openingHours: 'Daily: 8:00 AM - 6:00 PM (mausoleum hours may vary)',
    tags: ['Historic', 'Monument', 'Almohad', 'Mausoleum', 'Architecture'],
  },
  {
    slug: 'el-badi-palace',
    name: 'El Badi Palace',
    city: 'Marrakech',
    category: 'Palace Ruins',
    description:
      'El Badi Palace, meaning "The Incomparable," was once one of the most magnificent palaces in the world, built between 1578 and 1593 by the Saadian Sultan Ahmad al-Mansur to celebrate his victory over the Portuguese at the Battle of the Three Kings. The sultan spared no expense, importing Italian marble, Irish granite, Indian onyx, and gold leaf from Timbuktu to create a palace that contemporary accounts described as rivaling the wonders of the ancient world.\n\nToday, the palace is a vast, evocative ruin. The treasures and decorations were systematically stripped by the Alaouite Sultan Moulay Ismail in the late 17th century, who spent over a decade dismantling the palace to furnish his own capital in Meknes. What remains is a monumental shell: massive walls of rammed earth surrounding an enormous sunken courtyard with a central reflecting pool, flanked by symmetrical sunken gardens planted with orange trees and surrounded by the hollow shells of once-lavish pavilions.\n\nThe scale and symmetry of El Badi Palace are still deeply impressive. The main courtyard alone measures 135 by 110 meters, and the walls rise to imposing heights that hint at the original grandeur. Underground chambers and passageways, accessible to visitors, contain a collection of carved marble elements and the original minbar (pulpit) from the nearby Koutoubia Mosque, an extraordinary work of 12th-century Andalusian craftsmanship in carved cedar and ivory inlay.\n\nClimbing to the top of the palace walls rewards visitors with sweeping views over the rooftops of Marrakech, with the snow-capped Atlas Mountains forming a dramatic backdrop. In June, the palace ruins serve as an atmospheric venue for the Marrakech International Film Festival and other cultural events. Storks nest atop the crumbling walls, adding a picturesque natural element to the already photogenic ruins.',
    images: [
      '/images/hero-marrakech.webp',
      '/images/hero-majorelle-garden.webp',
      '/images/hero-riad-interior.webp',
    ],
    rating: 4.3,
    reviewCount: 6789,
    visitDuration: '1-1.5 hours',
    bestTime: 'Late afternoon for golden light on the walls',
    entranceFee: '70 MAD',
    location: { lat: 31.6172, lng: -7.9864 },
    highlights: [
      'Monumental ruins of a once-incomparable Saadian palace',
      'Vast sunken courtyard with reflecting pool and orange gardens',
      'Underground chambers with the original Koutoubia minbar',
      'Panoramic rooftop views of Marrakech and the Atlas Mountains',
      'Nesting storks on the ancient walls',
    ],
    tips: [
      'Explore the underground passages to see the original Koutoubia minbar.',
      'Climb the walls for the best rooftop views of Marrakech and the Atlas peaks.',
      'Visit during the Marrakech Festival season for special cultural events in the ruins.',
    ],
    nearbyAttractions: [
      { name: 'Bahia Palace', slug: 'bahia-palace', image: '/images/hero-riad-interior.webp' },
      { name: 'Jemaa el-Fnaa', slug: 'jemaa-el-fnaa', image: '/images/hero-marrakech.webp' },
      { name: 'Jardin Majorelle', slug: 'jardin-majorelle', image: '/images/hero-majorelle-garden.webp' },
    ],
    openingHours: 'Daily: 9:00 AM - 5:00 PM',
    tags: ['Palace', 'Ruins', 'Historic', 'Saadian', 'Photography'],
  },
  {
    slug: 'chouara-tannery',
    name: 'Chouara Tannery',
    city: 'Fes',
    category: 'Artisan Heritage',
    description:
      'The Chouara Tannery is the oldest and largest of the three traditional leather tanneries in Fes, dating back to the 11th century and operating continuously for over a thousand years. It is one of the most iconic and sensory-overwhelming sights in Morocco, a vast open-air complex of stone vats filled with vivid natural dyes where tanners work waist-deep using techniques virtually unchanged since the medieval era.\n\nThe tannery is nestled deep in the heart of the Fes el-Bali medina, and the best views come from the terraces of surrounding leather shops, which offer elevated vantage points looking down into the honeycomb of circular stone vats. From above, the scene is strikingly photogenic: rows of round vats filled with bright white, ochre, red, saffron, indigo, and mint green liquids create an abstract geometric pattern against the ancient stone. Workers in the vats treat the hides with pigeon droppings, quicklime, cow urine, and natural plant dyes including poppy, indigo, henna, and saffron.\n\nThe process of turning raw animal hides into soft, supple leather involves over a dozen stages, from the initial soaking and dehairing to the dyeing, drying, and finishing. Each stage uses traditional organic materials, making this one of the most sustainable leather-producing methods in the world. The tanners themselves are skilled artisans whose knowledge has been passed down through family lines for generations, and watching them work is a fascinating glimpse into living industrial heritage.\n\nThe smell of the tannery is famously pungent, and leather shop owners typically offer visitors a sprig of fresh mint to hold under their noses while viewing. Despite the intensity of the aroma, the Chouara Tannery remains one of the most-visited sites in Fes. The leather goods produced here are among the finest in Morocco, and the surrounding shops sell jackets, bags, slippers (babouches), belts, and poufs at prices that reflect the extraordinary amount of handwork involved.',
    images: [
      '/images/hero-souk-lamps.webp',
      '/images/hero-golf.webp',
      '/images/hero-ait-benhaddou.webp',
    ],
    rating: 4.4,
    reviewCount: 9123,
    visitDuration: '1-1.5 hours',
    bestTime: 'Morning (10-11 AM) when tanners are most active',
    entranceFee: 'Free (tip to leather shop expected)',
    location: { lat: 34.0663, lng: -4.9732 },
    highlights: [
      'Oldest operating tannery in the world (11th century)',
      'Vivid natural dye vats creating a striking visual mosaic',
      'Traditional techniques unchanged for over a thousand years',
      'Elevated terrace views from surrounding leather shops',
      'Finest handcrafted leather goods in Morocco',
    ],
    tips: [
      'Accept the sprig of mint offered at the door; the smell can be quite strong.',
      'Visit in the morning when the tanners are working and the vats are freshly filled.',
      'Do not feel obligated to buy leather; the viewing terraces are free to access.',
    ],
    nearbyAttractions: [
      { name: 'Fes el-Bali Medina', slug: 'fes-medina', image: '/images/hero-golf.webp' },
      { name: 'Volubilis Roman Ruins', slug: 'volubilis', image: '/images/hero-water-sports.webp' },
      { name: 'Blue Medina, Chefchaouen', slug: 'chefchaouen-medina', image: '/images/hero-fes.webp' },
    ],
    openingHours: 'Daily: 8:00 AM - 6:00 PM',
    tags: ['Artisan', 'Historic', 'Leather', 'Cultural', 'Photography'],
  },
]

function getAttractionBySlug(slug: string): Attraction | undefined {
  return attractions.find((a) => a.slug === slug)
}

/* ================================================================
   STATIC PARAMS + METADATA
   ================================================================ */

export function generateStaticParams() {
  return attractions.map((a) => ({ slug: a.slug }))
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const attraction = getAttractionBySlug(slug)
  if (!attraction) return { title: 'Attraction Not Found' }

  return {
    title: `${attraction.name}, ${attraction.city} | CityGuide Morocco`,
    description: `Visit ${attraction.name} in ${attraction.city}, Morocco. ${attraction.category}. Rated ${attraction.rating}/5 by ${attraction.reviewCount.toLocaleString()} visitors. Opening hours, entrance fees, tips, and nearby attractions.`,
    openGraph: {
      title: `${attraction.name} - ${attraction.city}, Morocco | CityGuide`,
      description: truncate(attraction.description.split('\n\n')[0], 200),
      images: [
        {
          url: attraction.images[0],
          width: 1200,
          height: 630,
          alt: `${attraction.name}, ${attraction.city}`,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${attraction.name} | CityGuide Morocco`,
      description: truncate(attraction.description.split('\n\n')[0], 200),
      images: [attraction.images[0]],
    },
    alternates: {
      canonical: `https://citytoursmorocco.com/attractions/${attraction.slug}`,
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

export default async function AttractionDetailPage({ params }: PageProps) {
  const { slug } = await params
  const attraction = getAttractionBySlug(slug)

  if (!attraction) notFound()

  const paragraphs = attraction.description.split('\n\n')

  /* -- JSON-LD Structured Data -- */

  const attractionSchema = generateStructuredData('TouristAttraction', {
    name: attraction.name,
    description: paragraphs[0],
    image: attraction.images,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: attraction.location.lat,
      longitude: attraction.location.lng,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: attraction.city,
      addressCountry: 'MA',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: attraction.rating,
      reviewCount: attraction.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    openingHours: attraction.openingHours,
    isAccessibleForFree: attraction.entranceFee === 'Free',
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
        name: 'Attractions',
        item: 'https://citytoursmorocco.com/attractions',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: attraction.name,
        item: `https://citytoursmorocco.com/attractions/${attraction.slug}`,
      },
    ],
  })

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(attractionSchema) }}
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
          backgroundImage: `url(${attraction.images[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-secondary)]" />

        <div className="relative z-10 w-full container-morocco pb-12 pt-32">
          {/* Category & City badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-primary)]/90 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              <Tag className="w-3.5 h-3.5" />
              {attraction.category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 text-white text-xs font-medium backdrop-blur-sm">
              <MapPin className="w-3.5 h-3.5" />
              {attraction.city}, Morocco
            </span>
          </div>

          {/* Attraction name */}
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 tracking-tight leading-[1.1]">
            {attraction.name}
          </h1>

          {/* Rating */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-1.5">
              {renderStars(attraction.rating)}
              <span className="text-white font-semibold ml-1">{attraction.rating.toFixed(1)}</span>
            </div>
            <span className="text-white/70 text-sm">
              {attraction.reviewCount.toLocaleString()} reviews
            </span>
          </div>

          {/* Quick info pills */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 text-white text-xs font-medium backdrop-blur-sm">
              <Clock className="w-3.5 h-3.5" />
              {attraction.visitDuration}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 text-white text-xs font-medium backdrop-blur-sm">
              <Ticket className="w-3.5 h-3.5" />
              {attraction.entranceFee}
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
              <Link href="/attractions" className="hover:text-[var(--color-primary)] transition-colors">
                Attractions
              </Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li className="text-[var(--text-primary)] font-medium">{attraction.name}</li>
          </ol>
        </div>
      </nav>

      {/* ============================================================
          IMAGE GALLERY
          ============================================================ */}
      <section className="bg-[var(--surface)]">
        <div className="container-morocco py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {attraction.images.map((img, i) => (
              <div key={i} className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <img
                  src={img}
                  alt={`${attraction.name} - Photo ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {i === 0 && (
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs">
                    <Camera className="w-3.5 h-3.5" />
                    {attraction.images.length} Photos
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
                    About {attraction.name}
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
                    Highlights
                  </h2>
                </div>
                <div className="zellige-border mb-6" />
                <div className="card-moroccan p-6 sm:p-8">
                  <ul className="space-y-4">
                    {attraction.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                        <span className="text-[var(--text-secondary)] leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Tips */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-accent)]/10">
                    <Lightbulb className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)]">
                    Visitor Tips
                  </h2>
                </div>
                <div className="zellige-border mb-6" />
                <div className="card-moroccan p-6 sm:p-8">
                  <ul className="space-y-4">
                    {attraction.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Lightbulb className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                        <span className="text-[var(--text-secondary)] leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Tags */}
              <section>
                <div className="flex flex-wrap items-center gap-2">
                  {attraction.tags.map((tag) => (
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

              {/* Nearby Attractions */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-secondary)]/10">
                    <Compass className="w-5 h-5 text-[var(--color-secondary)]" />
                  </div>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)]">
                    Nearby Attractions
                  </h2>
                </div>
                <div className="zellige-border mb-6" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {attraction.nearbyAttractions.map((nearby) => (
                    <Link
                      key={nearby.slug}
                      href={`/attractions/${nearby.slug}`}
                      className="card-moroccan overflow-hidden group hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={nearby.image}
                          alt={nearby.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                          {nearby.name}
                        </h3>
                        <span className="text-xs text-[var(--color-primary)] flex items-center gap-1 mt-1">
                          View details <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            {/* -- SIDEBAR (~30%) -- */}
            <aside className="w-full lg:w-[30%] space-y-6">

              {/* Info Card */}
              <div className="card-moroccan p-6 sticky top-24">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)] mb-5">
                  Visitor Information
                </h3>
                <div className="zellige-border mb-5" />

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">Visit Duration</p>
                      <p className="text-sm text-[var(--text-primary)] font-semibold">{attraction.visitDuration}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Sun className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">Best Time to Visit</p>
                      <p className="text-sm text-[var(--text-primary)] font-semibold">{attraction.bestTime}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Ticket className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">Entrance Fee</p>
                      <p className="text-sm text-[var(--text-primary)] font-semibold">{attraction.entranceFee}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">Opening Hours</p>
                      <p className="text-sm text-[var(--text-primary)] font-semibold">{attraction.openingHours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">Location</p>
                      <p className="text-sm text-[var(--text-primary)] font-semibold">{attraction.city}, Morocco</p>
                      <p className="text-xs text-[var(--text-muted)]">{attraction.location.lat.toFixed(4)}, {attraction.location.lng.toFixed(4)}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">Rating</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        {renderStars(attraction.rating)}
                        <span className="text-sm font-semibold text-[var(--text-primary)] ml-1">{attraction.rating.toFixed(1)}</span>
                      </div>
                      <p className="text-xs text-[var(--text-muted)]">{attraction.reviewCount.toLocaleString()} reviews</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-[var(--border-light)]">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${attraction.location.lat},${attraction.location.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-semibold text-sm hover:bg-[var(--color-primary)]/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <Compass className="w-4 h-4" />
                    Get Directions
                  </a>
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
            Visit {attraction.name}
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Add {attraction.name} to your Morocco itinerary. Explore nearby attractions in {attraction.city} and create your perfect trip.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${attraction.location.lat},${attraction.location.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-white text-[var(--color-primary)] font-semibold text-sm hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Compass className="w-4 h-4" />
              Get Directions
            </a>
            <Link
              href="/attractions"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-white/15 text-white font-semibold text-sm hover:bg-white/25 transition-all backdrop-blur-sm border border-white/20"
            >
              <ArrowRight className="w-4 h-4" />
              All Attractions
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
